'use client'

import Link from 'next/link'
import { Dna, MapPin, AlertTriangle } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#1e293b] bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Dna className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-bold tracking-widest text-white uppercase">
                  DIAGNÓSTICOS CARACAS
                </div>
                <div className="text-[10px] tracking-wider text-blue-400/70 uppercase font-medium">
                  Biotecnología & Cirugía Plástica
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Clínica especializada en biotecnología médica, péptidos de alta pureza y cirugía plástica de vanguardia en Caracas, Venezuela.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500/20 bg-blue-500/8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-medium text-blue-300">Distribuidores Ascend Vials — Venezuela</span>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={CONSTANTS.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @diagnosticos.ccs"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#1e293b] hover:border-pink-500/40 hover:bg-pink-500/8 text-slate-400 hover:text-pink-300 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-xs font-medium">@diagnosticos.ccs</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Servicios</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Péptidos & Biohacking', href: '#peptidos' },
                { label: 'Cirugías Plan TOP', href: '#cirugias' },
                { label: 'Cirugías Plan VIP', href: '#cirugias' },
                { label: 'Ubicación & Consulta', href: '#ubicacion' },
                { label: 'Solicitar Presupuesto', href: '#cirugias' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-slate-400 leading-snug">
                    Anexo del CMDLT / Clínicas Caracas
                  </p>
                  <p className="text-xs text-slate-600">San Bernardino, Caracas</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${CONSTANTS.whatsappNumber}?text=${encodeURIComponent('Hola Diagnósticos Caracas, necesito información.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
              <a
                href={CONSTANTS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="flex items-start gap-3 p-5 rounded-xl border border-amber-500/15 bg-amber-500/5 mb-8">
          <AlertTriangle className="w-4 h-4 text-amber-500/70 shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-400">Aviso Médico Legal:</span>{' '}
            Todos los protocolos de péptidos e intervenciones quirúrgicas requieren evaluación médica presencial previa ({CONSTANTS.consultationFee}) según las normativas sanitarias vigentes en Caracas, Venezuela. La información contenida en este sitio web es de carácter informativo y no sustituye la consulta médica profesional. Los resultados pueden variar según las características individuales de cada paciente.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#1e293b]">
          <p className="text-xs text-slate-600">
            © {year} Diagnósticos Caracas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/privacidad"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Política de Privacidad
            </Link>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <p className="text-xs text-slate-700">Caracas, Venezuela</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
