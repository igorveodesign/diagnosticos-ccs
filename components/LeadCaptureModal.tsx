'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X, Loader2, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  nombre: string
  whatsapp: string
  servicio: string
  modalidad: string
  mensaje: string
}

const initialForm: FormData = {
  nombre: '',
  whatsapp: '',
  servicio: '',
  modalidad: '',
  mensaje: '',
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      // Reset form after close animation
      const t = setTimeout(() => {
        setForm(initialForm)
        setState('idle')
      }, 300)
      return () => clearTimeout(t)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.whatsapp || !form.servicio || !form.modalidad) return
    setState('loading')

    const payload = {
      timestamp: new Date().toISOString(),
      nombre: form.nombre,
      whatsapp: form.whatsapp,
      servicio: form.servicio,
      modalidad: form.modalidad,
      mensaje: form.mensaje,
      fuente: 'Landing Page Diagnósticos Caracas',
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar la solicitud.')
      }

      try {
        sessionStorage.setItem(
          'dx-lead',
          JSON.stringify({ nombre: form.nombre, servicio: form.servicio }),
        )
      } catch {
        // sessionStorage puede estar bloqueado; la página /gracias tiene textos por defecto.
      }

      setState('success')
      router.push(CONSTANTS.thankYouPath)
    } catch (error) {
      console.error('[v0] Error enviando lead:', error)
      setState('error')
    }
  }

  const waSuccessMsg = encodeURIComponent(
    `Hola Diagnósticos Caracas, acabo de enviar mi solicitud de cita. Mi nombre es ${form.nombre} y estoy interesado/a en: ${form.servicio}.`
  )
  const waSuccessUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waSuccessMsg}`

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Agendar Evaluación Médica"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[#1e293b] bg-[#0d1424] shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 border-b border-[#1e293b] bg-[#0d1424]">
          <div>
            <h2 className="text-lg font-bold text-white">
              Agendar Evaluación Médica
            </h2>
            <p className="text-sm text-blue-400 font-semibold mt-0.5">
              Consulta Presencial — {CONSTANTS.consultationFee}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {state === 'success' ? (
            /* Success state */
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  ¡Solicitud Recibida!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Hemos recibido tu solicitud correctamente. Nuestro equipo médico se pondrá en contacto contigo a la brevedad para confirmar tu cita.
                </p>
              </div>
              <div className="w-full space-y-3">
                <a
                  href={waSuccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#22c35e] text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirmar por WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-3 px-5 rounded-xl border border-[#1e293b] text-slate-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nombre Completo <span className="text-blue-400">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: María González"
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-slate-600 text-sm transition-all duration-200"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  WhatsApp / Teléfono <span className="text-blue-400">*</span>
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="Ej: +58 412 000 0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-slate-600 text-sm transition-all duration-200"
                />
              </div>

              {/* Servicio */}
              <div>
                <label htmlFor="servicio" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Servicio de Interés <span className="text-blue-400">*</span>
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm transition-all duration-200 appearance-none cursor-pointer"
                  style={{ color: form.servicio ? '#f1f5f9' : '#475569' }}
                >
                  <option value="" disabled>
                    Selecciona un servicio...
                  </option>
                  <option value="Stacks de Péptidos (Ascend Vials)">Stacks de Péptidos (Ascend Vials)</option>
                  <option value="Mamoplastia de Aumento">Mamoplastia de Aumento</option>
                  <option value="Mastopexia (Levantamiento)">Mastopexia (Levantamiento)</option>
                  <option value="Lipoescultura Alta Definición">Lipoescultura Alta Definición</option>
                  <option value="Rinoplastia Estética y Funcional">Rinoplastia Estética y Funcional</option>
                  <option value="Evaluación General">Evaluación General</option>
                </select>
              </div>

              {/* Modalidad */}
              <div>
                <label htmlFor="modalidad" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Modalidad Quirúrgica Preferida <span className="text-blue-400">*</span>
                </label>
                <select
                  id="modalidad"
                  name="modalidad"
                  required
                  value={form.modalidad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm transition-all duration-200 appearance-none cursor-pointer"
                  style={{ color: form.modalidad ? '#f1f5f9' : '#475569' }}
                >
                  <option value="" disabled>
                    Selecciona una modalidad...
                  </option>
                  <option value="Plan TOP">Plan TOP (Eficiencia & Seguridad)</option>
                  <option value="Plan VIP">Plan VIP (Experiencia Premium)</option>
                  <option value="No seguro / Requiere orientación">No seguro / Requiero orientación</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Mensaje / Comentario Opcional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tus objetivos, preguntas o información adicional que consideres relevante..."
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-slate-600 text-sm transition-all duration-200 resize-none leading-relaxed"
                />
              </div>

              {/* Error state */}
              {state === 'error' && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-300">
                    Ocurrió un error. Por favor intenta nuevamente o contáctanos directamente por WhatsApp.
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={state === 'loading' || !form.nombre || !form.whatsapp || !form.servicio || !form.modalidad}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.01] active:scale-[0.99]"
              >
                {state === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando solicitud...
                  </>
                ) : (
                  'Confirmar Solicitud de Cita'
                )}
              </button>

              <p className="text-center text-[11px] text-slate-600 leading-relaxed">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo por WhatsApp para confirmar tu cita.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
