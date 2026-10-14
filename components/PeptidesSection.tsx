'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Flame,
  Zap,
  Shield,
  Sparkles,
  Sun,
  User,
  Heart,
  MessageCircle,
  CheckCircle2,
  Award,
  DollarSign,
  Expand,
} from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'
import PeptideModal from '@/components/PeptideModal'

type Stack = (typeof CONSTANTS.peptidesData)[number]

const iconMap: Record<string, React.ElementType> = {
  flame: Flame,
  zap: Zap,
  shield: Shield,
  sparkles: Sparkles,
  sun: Sun,
  user: User,
  heart: Heart,
}

const accentMap: Record<string, string> = {
  'fat-burner': 'border-blue-500/30 hover:border-blue-400/50',
  metabolic: 'border-sky-500/30 hover:border-sky-400/50',
  recovery: 'border-indigo-500/30 hover:border-indigo-400/50',
  skin: 'border-violet-500/30 hover:border-violet-400/50',
  glow: 'border-purple-500/30 hover:border-purple-400/50',
  facial: 'border-pink-500/30 hover:border-pink-400/50',
  summer: 'border-orange-500/30 hover:border-orange-400/50',
  klow: 'border-emerald-500/30 hover:border-emerald-400/50',
}

const badgeColorMap: Record<string, string> = {
  'fat-burner': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  metabolic: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  recovery: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  skin: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  glow: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  facial: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
  summer: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  klow: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
}

const iconColorMap: Record<string, string> = {
  'fat-burner': 'text-blue-400',
  metabolic: 'text-sky-400',
  recovery: 'text-indigo-400',
  skin: 'text-violet-400',
  glow: 'text-purple-400',
  facial: 'text-pink-400',
  summer: 'text-orange-400',
  klow: 'text-emerald-400',
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

const btnColorMap: Record<string, string> = {
  'fat-burner': 'border-blue-500/30 hover:bg-blue-500/15 hover:border-blue-400/60 text-blue-300',
  metabolic: 'border-sky-500/30 hover:bg-sky-500/15 hover:border-sky-400/60 text-sky-300',
  recovery: 'border-indigo-500/30 hover:bg-indigo-500/15 hover:border-indigo-400/60 text-indigo-300',
  skin: 'border-violet-500/30 hover:bg-violet-500/15 hover:border-violet-400/60 text-violet-300',
  glow: 'border-purple-500/30 hover:bg-purple-500/15 hover:border-purple-400/60 text-purple-300',
  facial: 'border-pink-500/30 hover:bg-pink-500/15 hover:border-pink-400/60 text-pink-300',
  summer: 'border-orange-500/30 hover:bg-orange-500/15 hover:border-orange-400/60 text-orange-300',
  klow: 'border-emerald-500/30 hover:bg-emerald-500/15 hover:border-emerald-400/60 text-emerald-300',
}

const overlayMap: Record<string, string> = {
  'fat-burner': 'from-blue-900/80 via-[#080c14]/60 to-[#080c14]',
  metabolic: 'from-sky-900/80 via-[#080c14]/60 to-[#080c14]',
  recovery: 'from-indigo-900/80 via-[#080c14]/60 to-[#080c14]',
  skin: 'from-violet-900/80 via-[#080c14]/60 to-[#080c14]',
  glow: 'from-purple-900/80 via-[#080c14]/60 to-[#080c14]',
  facial: 'from-pink-900/80 via-[#080c14]/60 to-[#080c14]',
  summer: 'from-orange-900/80 via-[#080c14]/60 to-[#080c14]',
  klow: 'from-emerald-900/80 via-[#080c14]/60 to-[#080c14]',
}

export default function PeptidesSection() {
  const [activeStack, setActiveStack] = useState<Stack | null>(null)

  return (
    <>
    <PeptideModal stack={activeStack} onClose={() => setActiveStack(null)} />
    <section id="peptidos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
              Ascend Vials Line
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
            Optimización Celular &{' '}
            <span className="gradient-text">Longevidad</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            Distribuidores Exclusivos en Venezuela. Péptidos de Alta Pureza (99%).
          </p>
          {/* Exclusivity badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-blue-500/25 bg-[#111827] max-w-xl mx-auto">
            <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-blue-300 font-medium text-center leading-snug">
              {CONSTANTS.exclusivityTag}
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CONSTANTS.peptidesData.map((stack) => {
            const Icon = iconMap[stack.icon] ?? Zap
            const waMsg = encodeURIComponent(
              `Hola, deseo información sobre el Stack ${stack.name}.`
            )
            const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMsg}`

            return (
              <div
                key={stack.id}
                className={`group relative flex flex-col rounded-2xl border bg-[#111827] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${accentMap[stack.id]}`}
              >
                {/* Product image — click to open modal */}
                <button
                  onClick={() => setActiveStack(stack)}
                  className="relative w-full h-52 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`Ver detalles del Stack ${stack.name}`}
                >
                  <Image
                    src={stack.image}
                    alt={`Stack ${stack.name} - Ascend Vials`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${overlayMap[stack.id]} opacity-70`}
                  />
                  {/* Purity badge on image */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm ${badgeColorMap[stack.id]}`}
                    >
                      99% Pureza
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${badgeColorMap[stack.id]}`}
                    >
                      {stack.category}
                    </span>
                  </div>
                  {/* Expand hint on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                      <Expand className="w-3.5 h-3.5 text-white" />
                      <span className="text-[11px] font-semibold text-white">Ver detalles</span>
                    </div>
                  </div>
                </button>

                {/* Card content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Icon + Name & compounds + price */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 shrink-0 mt-0.5">
                      <Icon className={`w-4 h-4 ${iconColorMap[stack.id]}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white tracking-wide leading-tight">
                        {stack.name}
                      </h3>
                      <p className={`text-[11px] font-mono font-medium ${iconColorMap[stack.id]} mt-0.5`}>
                        {stack.compounds}
                      </p>
                    </div>
                    <div className={`flex items-center gap-0.5 text-base font-bold shrink-0 ${iconColorMap[stack.id]}`}>
                      <DollarSign className="w-3.5 h-3.5" strokeWidth={2.5} />
                      <span>{stack.price.replace('$', '')}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">{stack.tagline}</p>

                  {/* Benefits */}
                  <ul className="space-y-1.5 flex-1 mb-5">
                    {stack.benefits.slice(0, 4).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${checkColorMap[stack.id]} shrink-0 mt-0.5`}
                          strokeWidth={2}
                        />
                        <span className="text-[11px] text-slate-400 leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all duration-200 ${btnColorMap[stack.id]}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consultar Stack
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}
