'use client'

import Image from 'next/image'
import {
  ShieldCheck,
  ArrowUp,
  Activity,
  Eye,
  RefreshCw,
  CheckCircle2,
  MessageCircle,
  Star,
  Crown,
} from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  'arrow-up': ArrowUp,
  activity: Activity,
  eye: Eye,
  'refresh-cw': RefreshCw,
}

export default function SurgeriesSection() {
  return (
    <section id="cirugias" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[400px] bg-blue-600/3 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-500/25 bg-slate-500/8 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
              Cirugía Plástica Certificada
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
            Presupuestos Quirúrgicos{' '}
            <span className="gradient-text">Transparentes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            Precios expresados desde{' '}
            <span className="text-white font-semibold">*</span> — Planes TOP y VIP disponibles
            según requerimientos del paciente.
          </p>
        </div>

        {/* Plan comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
          {/* Plan TOP */}
          <div className="flex flex-col gap-3 p-5 rounded-2xl border border-[#1e293b] bg-[#111827]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-0.5">
                  Plan TOP
                </div>
                <div className="text-xs text-slate-500">Eficiencia & Seguridad</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Alternativa altamente eficiente con todos los insumos quirúrgicos y de seguridad
              indispensables. Resultados de alta calidad con protocolos médicos de vanguardia.
            </p>
            <ul className="space-y-1.5">
              {[
                'Insumos quirúrgicos certificados',
                'Sugammadex (reversor anestésico)',
                'Controles postoperatorios',
                'Resultados de excelencia',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" strokeWidth={2} />
                  <span className="text-xs text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan VIP */}
          <div className="flex flex-col gap-3 p-5 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/8 to-[#111827]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider text-amber-400 uppercase mb-0.5">
                  Plan VIP
                </div>
                <div className="text-xs text-slate-500">Experiencia Premium</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Experiencia prémium con mayor confort hospitalario, seguimiento personalizado y
              atención exclusiva. Hotelería clínica y cuidados de nivel superior.
            </p>
            <ul className="space-y-1.5">
              {[
                'Hotelería clínica de lujo',
                'Seguimiento personalizado 24/7',
                'Atención médica exclusiva',
                'Cuidados postoperatorios premium',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" strokeWidth={2} />
                  <span className="text-xs text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Surgery cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONSTANTS.surgeriesData.map((surgery, index) => {
            const Icon = iconMap[surgery.icon] ?? ShieldCheck
            const waMsg = encodeURIComponent(
              `Hola Diagnósticos Caracas, deseo solicitar un presupuesto detallado para ${surgery.name}.`
            )
            const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${waMsg}`
            const isFeatured = index === 2 // Lipoescultura highlighted

            return (
              <div
                key={surgery.id}
                className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                  isFeatured
                    ? 'border-blue-500/35 bg-[#111827]'
                    : 'border-[#1e293b] bg-[#111827] hover:border-[#334155]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-white bg-blue-600 uppercase shadow-lg">
                      Popular
                    </span>
                  </div>
                )}

                {/* Surgery image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={surgery.image}
                    alt={surgery.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111827]/40 to-[#111827]" />
                  {/* Plan badges overlay */}
                  <div className="absolute bottom-3 left-4 flex gap-2">
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/80 text-white backdrop-blur-sm border border-blue-400/30">
                      Plan TOP
                    </span>
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/80 text-white backdrop-blur-sm border border-amber-400/30">
                      Plan VIP
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    isFeatured
                      ? 'bg-blue-500/20 border border-blue-500/30'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isFeatured ? 'text-blue-400' : 'text-slate-400'}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Name & price */}
                <div className="mb-3">
                  <h3 className="text-base font-bold text-white mb-1">{surgery.name}</h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-white">{surgery.basePrice}</span>
                    <span className="text-xs text-slate-500 font-medium">USD (Desde*)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-none">
                  {surgery.description}
                </p>

                {/* Includes */}
                <div className="mb-5 flex-1">
                  <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase mb-3">
                    Incluye
                  </p>
                  <ul className="space-y-2">
                    {surgery.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="text-xs text-slate-400 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isFeatured
                      ? 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500'
                      : 'border border-[#1e293b] hover:border-[#334155] hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Solicitar Presupuesto Detallado
                </a>
                </div>{/* end card content */}
              </div>
            )
          })}
        </div>

        {/* Fine print */}
        <p className="text-center text-xs text-slate-600 mt-8 max-w-xl mx-auto leading-relaxed">
          * Los precios son referenciales y varían según el Plan (TOP o VIP), la complejidad del caso y los requerimientos individuales del paciente, evaluados en consulta presencial ({CONSTANTS.consultationFee}).
        </p>
      </div>
    </section>
  )
}
