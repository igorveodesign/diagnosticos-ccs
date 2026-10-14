'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  X,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
  Award,
  DollarSign,
} from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

type Stack = (typeof CONSTANTS.peptidesData)[number]

interface PeptideModalProps {
  stack: Stack | null
  onClose: () => void
}

const checkColorMap: Record<string, string> = {
  'fat-burner': 'text-blue-400',
  metabolic: 'text-sky-400',
  recovery: 'text-indigo-400',
  skin: 'text-violet-400',
  glow: 'text-purple-400',
  facial: 'text-pink-400',
  summer: 'text-orange-400',
  klow: 'text-emerald-400',
}

const accentBorderMap: Record<string, string> = {
  'fat-burner': 'border-blue-500/30',
  metabolic: 'border-sky-500/30',
  recovery: 'border-indigo-500/30',
  skin: 'border-violet-500/30',
  glow: 'border-purple-500/30',
  facial: 'border-pink-500/30',
  summer: 'border-orange-500/30',
  klow: 'border-emerald-500/30',
}

const accentBgMap: Record<string, string> = {
  'fat-burner': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  metabolic: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
  recovery: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
  skin: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
  glow: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  facial: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
  summer: 'bg-orange-500/10 text-orange-300 border-orange-500/30',
  klow: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
}

const priceColorMap: Record<string, string> = {
  'fat-burner': 'text-blue-400',
  metabolic: 'text-sky-400',
  recovery: 'text-indigo-400',
  skin: 'text-violet-400',
  glow: 'text-purple-400',
  facial: 'text-pink-400',
  summer: 'text-orange-400',
  klow: 'text-emerald-400',
}

const btnMap: Record<string, string> = {
  'fat-burner': 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20',
  metabolic: 'bg-sky-600 hover:bg-sky-500 shadow-sky-500/20',
  recovery: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20',
  skin: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/20',
  glow: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20',
  facial: 'bg-pink-600 hover:bg-pink-500 shadow-pink-500/20',
  summer: 'bg-orange-600 hover:bg-orange-500 shadow-orange-500/20',
  klow: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20',
}

export default function PeptideModal({ stack, onClose }: PeptideModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!stack) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [stack, handleKey])

  if (!stack) return null

  const waMsg = encodeURIComponent(`Hola, deseo información sobre el Stack ${stack.name}.`)
  const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMsg}`
  const checkColor = checkColorMap[stack.id] ?? 'text-blue-400'
  const priceColor = priceColorMap[stack.id] ?? 'text-blue-400'
  const accentBorder = accentBorderMap[stack.id] ?? 'border-blue-500/30'
  const accentBg = accentBgMap[stack.id] ?? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
  const btnColor = btnMap[stack.id] ?? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles del stack ${stack.name}`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border ${accentBorder} bg-[#0d1525] shadow-2xl flex flex-col`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Full product image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl shrink-0">
          <Image
            src={stack.image}
            alt={`Stack ${stack.name} - Ascend Vials`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-[#0d1525]/30 to-transparent" />

          {/* Badges over image */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${accentBg}`}>
              99% Pureza Certificada
            </span>
            <span className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${accentBg}`}>
              {stack.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 p-6">
          {/* Name + price row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide leading-tight">
                {stack.name}
              </h2>
              <p className={`text-xs font-mono font-medium mt-1 ${priceColor}`}>
                {stack.compounds}
              </p>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <div className={`flex items-center gap-1 text-2xl font-bold ${priceColor}`}>
                <DollarSign className="w-5 h-5" strokeWidth={2.5} />
                <span>{stack.price.replace('$', '')}</span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase mt-0.5">Precio referencial</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3">
            {stack.tagline}
          </p>

          {/* Benefits */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Beneficios del Protocolo
              </h3>
            </div>
            <ul className="space-y-2">
              {stack.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className={`w-4 h-4 ${checkColor} shrink-0 mt-0.5`}
                    strokeWidth={2}
                  />
                  <span className="text-sm text-slate-300 leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical note */}
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-amber-300/80 leading-relaxed">
            Requiere evaluación médica presencial previa ({CONSTANTS.consultationFee}) para personalizar el protocolo según tu perfil de salud.
          </div>

          {/* Primary CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${btnColor}`}
          >
            <MessageCircle className="w-4 h-4" />
            Consultar este Stack por WhatsApp
          </a>

          {/* Social follow card */}
          <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-4">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">
              Seguinos en redes sociales
            </p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Contenido educativo sobre péptidos, biohacking y cirugía plástica. Resultados reales de pacientes y protocolos actualizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={CONSTANTS.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-lg border border-[#1e293b] hover:border-pink-500/40 hover:bg-pink-500/8 text-sm font-semibold text-slate-300 hover:text-pink-300 transition-all duration-200"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @diagnosticos.ccs
                <ExternalLink className="w-3 h-3 opacity-50 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
