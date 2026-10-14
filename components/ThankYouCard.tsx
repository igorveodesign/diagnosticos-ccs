'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, ArrowLeft, Clock, ShieldCheck } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

interface StoredLead {
  nombre?: string
  servicio?: string
}

export default function ThankYouCard() {
  const [lead, setLead] = useState<StoredLead>({})

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('dx-lead')
      if (raw) setLead(JSON.parse(raw) as StoredLead)
    } catch {
      // Sin datos guardados usamos el mensaje genérico.
    }
  }, [])

  const waMessage = encodeURIComponent(
    lead.nombre
      ? `Hola Diagnósticos Caracas, acabo de enviar mi solicitud de cita. Mi nombre es ${lead.nombre} y estoy interesado/a en: ${lead.servicio || 'una evaluación médica'}.`
      : 'Hola Diagnósticos Caracas, acabo de enviar mi solicitud de cita y quiero confirmarla.',
  )
  const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMessage}`

  return (
    <main className="min-h-svh flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-[#1e293b] bg-[#0d1424] p-8 sm:p-10 shadow-2xl shadow-black/50">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-400" strokeWidth={1.5} />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-white text-balance">
                {lead.nombre ? `Gracias, ${lead.nombre}` : 'Solicitud recibida'}
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed text-pretty">
                Tu solicitud fue registrada correctamente. Nuestro equipo médico te
                contactará por WhatsApp para confirmar la fecha de tu evaluación.
              </p>
            </div>

            {lead.servicio ? (
              <div className="w-full rounded-xl border border-[#1e293b] bg-[#111827] px-4 py-3 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Servicio
                </span>
                <span className="text-sm font-semibold text-white text-right">
                  {lead.servicio}
                </span>
              </div>
            ) : null}

            <div className="w-full flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 rounded-xl border border-[#1e293b] bg-[#111827] px-4 py-4 flex flex-col items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Respuesta en horario laboral
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-[#1e293b] bg-[#111827] px-4 py-4 flex flex-col items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consulta presencial {CONSTANTS.consultationFee}
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#22c35e] text-white text-sm font-bold transition-colors duration-200 shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar por WhatsApp
              </a>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl border border-[#1e293b] text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
