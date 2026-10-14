'use client'

import { MapPin, ExternalLink, Clock, Phone, DollarSign, Stethoscope } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

export default function LocationSection() {
  const waMsg = encodeURIComponent(
    'Hola Diagnósticos Caracas, deseo agendar una consulta médica presencial ($60).'
  )
  const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMsg}`

  return (
    <section id="ubicacion" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-500/25 bg-slate-500/8 mb-6">
            <MapPin className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
              Sede Presencial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
            Ubicación &{' '}
            <span className="gradient-text">Consulta Médica</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-base leading-relaxed">
            Atención presencial en el corazón de Caracas, dentro del complejo médico más reconocido de Venezuela.
          </p>
        </div>

        {/* Embedded map */}
        <div className="max-w-5xl mx-auto mb-8 rounded-2xl overflow-hidden border border-[#1e293b]">
          <div className="relative w-full" style={{ paddingBottom: '38%' }}>
            <iframe
              title="Ubicación Diagnósticos Caracas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.8!2d-66.8950!3d10.5010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5907b8e4e8c7%3A0x8c2a5907b8e4e8c7!2sCl%C3%ADnicas%20Caracas%2C%20San%20Bernardino%2C%20Caracas%201011%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Map footer bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-t border-[#1e293b]">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs text-slate-400">
                Clínicas Caracas / CMDLT — San Bernardino, Caracas
              </span>
            </div>
            <a
              href={CONSTANTS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Abrir en Maps
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Location card */}
          <div className="flex flex-col gap-5 p-6 rounded-2xl border border-[#1e293b] bg-[#111827]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Ubicación Sede Caracas</h3>
                <p className="text-xs text-slate-500">Atención presencial con cita previa</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold text-slate-300 mb-1">Dirección</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Anexo del Centro Médico Docente La Trinidad / Clínicas Caracas
                  </p>
                  <p className="text-sm font-medium text-white mt-0.5">San Bernardino, Caracas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold text-slate-300 mb-1">Horario de atención</p>
                  <p className="text-sm text-slate-400">Lunes a Viernes: 8:00 AM — 5:00 PM</p>
                  <p className="text-xs text-slate-500 mt-0.5">Sábados con cita previa</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                <Phone className="w-4 h-4 text-green-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold text-slate-300 mb-1">Contacto directo</p>
                  <p className="text-sm text-slate-400">WhatsApp & Teléfono disponible</p>
                  <p className="text-xs text-slate-500 mt-0.5">Respuesta en menos de 2 horas</p>
                </div>
              </div>
            </div>

            <a
              href={CONSTANTS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-blue-500/30 bg-blue-500/8 hover:bg-blue-500/15 hover:border-blue-400/50 text-blue-300 text-sm font-semibold transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
              Ver Ubicación en Google Maps
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Consultation info card */}
          <div className="flex flex-col gap-5">
            {/* Fee highlight */}
            <div className="p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-[#111827] glow-blue">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Consulta Médica Presencial</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$60</span>
                    <span className="text-sm text-slate-400">USD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                La consulta incluye evaluación física completa, diagnóstico personalizado y propuesta
                de protocolo adaptada a tus objetivos específicos.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  'Evaluación física integral y diagnóstico',
                  'Propuesta de protocolo personalizado',
                  'Orientación sobre Péptidos o Cirugía',
                  'Presupuesto detallado sin compromiso',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 italic">
                * Requiere agendamiento previo. Presencial únicamente.
              </p>
            </div>

            {/* Specialty note */}
            <div className="p-5 rounded-2xl border border-[#1e293b] bg-[#111827] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Atención Médica Especializada
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nuestro equipo médico especializado en biotecnología y cirugía plástica diseña
                  protocolos únicos y personalizados para cada paciente, priorizando resultados
                  seguros y duraderos.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#22c35e] text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Consulta por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
