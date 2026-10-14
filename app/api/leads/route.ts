import { NextResponse } from 'next/server'
import { CONSTANTS } from '@/lib/constants'

interface LeadPayload {
  timestamp?: string
  nombre?: string
  whatsapp?: string
  servicio?: string
  modalidad?: string
  mensaje?: string
  fuente?: string
}

function isNonEmpty(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload

    if (
      !isNonEmpty(payload.nombre) ||
      !isNonEmpty(payload.whatsapp) ||
      !isNonEmpty(payload.servicio) ||
      !isNonEmpty(payload.modalidad)
    ) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 },
      )
    }

    if (!CONSTANTS.googleSheetWebhookUrl.includes('/exec')) {
      return NextResponse.json(
        { error: 'El webhook de Google Sheets no está configurado.' },
        { status: 500 },
      )
    }

    const webhookResponse = await fetch(CONSTANTS.googleSheetWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: payload.timestamp || new Date().toISOString(),
        nombre: payload.nombre.trim(),
        whatsapp: payload.whatsapp.trim(),
        servicio: payload.servicio.trim(),
        modalidad: payload.modalidad.trim(),
        mensaje: typeof payload.mensaje === 'string' ? payload.mensaje.trim() : '',
        fuente: payload.fuente || 'Landing Page Diagnósticos Caracas',
      }),
      cache: 'no-store',
    })

    const responseText = await webhookResponse.text()
    let webhookData: { result?: string; error?: string } = {}

    try {
      webhookData = JSON.parse(responseText)
    } catch {
      // Apps Script may return a non-JSON redirect response while still accepting the lead.
    }

    if (!webhookResponse.ok || webhookData.result === 'error') {
      console.error('[v0] Google Sheets webhook rejected lead:', {
        status: webhookResponse.status,
        response: responseText.slice(0, 500),
      })
      return NextResponse.json(
        { error: webhookData.error || 'Google Sheets no aceptó la solicitud.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[v0] Lead submission failed:', error)
    return NextResponse.json(
      { error: 'No se pudo enviar la solicitud. Intenta nuevamente.' },
      { status: 500 },
    )
  }
}
