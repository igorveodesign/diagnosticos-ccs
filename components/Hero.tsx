'use client'

import Image from 'next/image'
import { ArrowRight, MessageCircle, ShieldCheck, Zap, FlaskConical } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

interface HeroProps {
  onOpenModal: () => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  const waMessage = encodeURIComponent(
    'Hola Diagnósticos Caracas, deseo agendar una evaluación médica.'
  )
  const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMessage}`

  const highlights = [
    {
      icon: FlaskConical,
      text: 'Péptidos 99% Pureza — Distribuidores Únicos en Venezuela',
    },
    {
      icon: ShieldCheck,
      text: 'Planes Quirúrgicos TOP & VIP',
    },
    {
      icon: Zap,
      text: 'Sugammadex (Reversor Anestésico) Incluido',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-20">
      {/* Full-bleed hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Diagnósticos Caracas - Biotecnología Médica"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-[#080c14]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/40 via-transparent to-[#080c14]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/50 via-transparent to-[#080c14]/50" />
      </div>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center" style={{ zIndex: 10 }}>
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/8 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
            Atención Médica Presencial — San Bernardino, Caracas
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05] mb-6">
          <span className="text-white">Biotecnología Médica</span>
          <br />
          <span className="gradient-text">&amp; Cirugía Plástica</span>
          <br />
          <span className="text-white">de Vanguardia</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed text-balance mb-10">
          Protocolos de optimización celular y procedimientos quirúrgicos con presupuestos base
          transparentes. Consulta médica de evaluación:{' '}
          <span className="text-blue-400 font-semibold">{CONSTANTS.consultationFee}</span>.
        </p>

        {/* Highlights bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#1e293b] bg-[#111827]/60 backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4 text-blue-400 shrink-0" strokeWidth={1.5} />
              <span className="text-xs sm:text-sm font-medium text-slate-300 text-center sm:text-left">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="group flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            Agendar Valoración Presencial ({CONSTANTS.consultationFee})
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 border border-[#1e293b] hover:border-[#334155] bg-[#111827]/60 hover:bg-[#111827] transition-all duration-200 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
            Consultar por WhatsApp
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-slate-500 uppercase">Explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
