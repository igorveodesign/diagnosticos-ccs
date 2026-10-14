'use client'

import { MessageCircle, FlaskConical, DollarSign } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

const categoryConfig: Record<string, { label: string; accent: string; bg: string; border: string; dot: string }> = {
  'Control Metabólico': {
    label: 'Control Metabólico',
    accent: 'text-blue-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
    dot: 'bg-blue-400',
  },
  Antienvejecimiento: {
    label: 'Antienvejecimiento',
    accent: 'text-pink-300',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/25',
    dot: 'bg-pink-400',
  },
  Regeneración: {
    label: 'Regeneración Avanzada',
    accent: 'text-indigo-300',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/25',
    dot: 'bg-indigo-400',
  },
  Rendimiento: {
    label: 'Rendimiento y Energía',
    accent: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    dot: 'bg-emerald-400',
  },
}

// Group peptides by category
const grouped = CONSTANTS.individualPeptidesData.reduce<
  Record<string, typeof CONSTANTS.individualPeptidesData>
>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = []
  acc[p.category].push(p)
  return acc
}, {})

export default function IndividualPeptidesSection() {
  return (
    <section id="catalogo" className="relative py-24 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <FlaskConical className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
              Catálogo Completo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
            Péptidos{' '}
            <span className="gradient-text">Individuales</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            Todos los compuestos Ascend Vials disponibles con sus precios de referencia. Cada protocolo es personalizado según tu evaluación médica.
          </p>
        </div>

        {/* Category groups */}
        <div className="space-y-12">
          {Object.entries(grouped).map(([category, peptides]) => {
            const cfg = categoryConfig[category] ?? categoryConfig['Rendimiento']
            return (
              <div key={category}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
                  <h3 className={`text-sm font-bold tracking-widest uppercase ${cfg.accent}`}>
                    {cfg.label}
                  </h3>
                  <div className="flex-1 h-px bg-[#1e293b]" />
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.border} ${cfg.accent} font-semibold`}>
                    {peptides.length} compuesto{peptides.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Peptide cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {peptides.map((p) => {
                    const waMsg = encodeURIComponent(
                      `Hola, deseo información sobre el péptido ${p.name}.`
                    )
                    const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMsg}`

                    return (
                      <div
                        key={p.id}
                        className={`group flex flex-col rounded-xl border ${cfg.border} bg-[#111827] hover:bg-[#141e2e] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
                      >
                        {/* Top accent bar */}
                        <div className={`h-0.5 w-full ${cfg.dot}`} />

                        <div className="flex flex-col flex-1 p-5">
                          {/* Name + dose + price */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div>
                              <h4 className="text-sm font-bold text-white leading-tight">
                                {p.name}
                              </h4>
                              <p className="text-[11px] text-slate-500 mt-0.5 font-mono">{p.doses}</p>
                            </div>
                            <div className={`flex items-center gap-0.5 text-lg font-bold shrink-0 ${cfg.accent}`}>
                              <DollarSign className="w-3.5 h-3.5" strokeWidth={2.5} />
                              <span>{p.price.replace('$', '')}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-slate-400 leading-relaxed flex-1 mb-4">
                            {p.description}
                          </p>

                          {/* Ideal for */}
                          <div className={`text-[11px] px-3 py-2 rounded-lg ${cfg.bg} border ${cfg.border} ${cfg.accent} leading-snug mb-4`}>
                            <span className="font-bold">Ideal para: </span>
                            {p.ideal}
                          </div>

                          {/* CTA */}
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#1e293b] hover:border-green-500/40 hover:bg-green-500/8 text-xs font-semibold text-slate-400 hover:text-green-300 transition-all duration-200"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            Consultar disponibilidad
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
            Precios de referencia en USD. Los protocolos se prescriben tras evaluación médica presencial ({CONSTANTS.consultationFee}). Disponibilidad sujeta a stock.
          </p>
        </div>
      </div>
    </section>
  )
}
