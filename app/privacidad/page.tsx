import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Dna, Shield, Cookie, Database, UserCheck, Mail } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Diagnósticos Caracas',
  description:
    'Cómo Diagnósticos Caracas recolecta, usa y protege tus datos personales, incluido el uso de cookies y herramientas de medición publicitaria.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    icon: Database,
    title: '1. Datos que recolectamos',
    body: [
      'Cuando completas el formulario de solicitud de cita en este sitio, recolectamos únicamente los datos que tú nos proporcionas de forma voluntaria: nombre y apellido, número de WhatsApp, el servicio sobre el que deseas información y la modalidad de consulta que prefieres.',
      'No solicitamos ni almacenamos en este sitio web historias clínicas, diagnósticos, resultados de exámenes ni ningún otro dato médico. Toda la información clínica se maneja exclusivamente de forma presencial durante la consulta médica.',
    ],
  },
  {
    icon: UserCheck,
    title: '2. Para qué usamos tus datos',
    body: [
      'Usamos los datos de contacto con una única finalidad: comunicarnos contigo por WhatsApp para coordinar tu consulta de evaluación y responder tus preguntas sobre nuestros servicios.',
      'No vendemos, alquilamos ni cedemos tus datos personales a terceros con fines comerciales.',
    ],
  },
  {
    icon: Cookie,
    title: '3. Cookies',
    body: [
      'Este sitio utiliza únicamente cookies técnicas necesarias para su funcionamiento. Las cookies son pequeños archivos que se guardan en tu navegador.',
      'No utilizamos píxeles publicitarios, herramientas de seguimiento de terceros ni compartimos tus datos de navegación con plataformas de publicidad.',
      'Puedes bloquear o eliminar las cookies en la configuración de tu navegador en cualquier momento. Si lo haces, el sitio seguirá funcionando con normalidad.',
    ],
  },
  {
    icon: Shield,
    title: '4. Conservación y seguridad',
    body: [
      'Los datos del formulario se almacenan en servicios de terceros con medidas de seguridad estándar de la industria y se conservan únicamente durante el tiempo necesario para gestionar tu solicitud y dar seguimiento a tu consulta.',
      'El acceso a esta información está restringido al personal autorizado de Diagnósticos Caracas. La transmisión de datos entre tu navegador y nuestro sitio se realiza mediante conexión cifrada (HTTPS).',
    ],
  },
  {
    icon: UserCheck,
    title: '5. Tus derechos',
    body: [
      'Puedes solicitar en cualquier momento el acceso, la rectificación o la eliminación de los datos personales que nos hayas proporcionado, así como pedir que dejemos de contactarte.',
      'Para ejercer cualquiera de estos derechos, escríbenos por WhatsApp al número de contacto de la clínica indicando tu solicitud. Atenderemos tu petición en un plazo razonable.',
    ],
  },
  {
    icon: Mail,
    title: '6. Cambios y contacto',
    body: [
      'Podemos actualizar esta política para reflejar cambios en nuestras prácticas o en la normativa aplicable. La fecha de última actualización siempre estará visible al final de esta página.',
      'Si tienes dudas sobre el tratamiento de tus datos, puedes contactarnos por WhatsApp o a través de nuestras redes sociales.',
    ],
  },
]

export default function PrivacidadPage() {
  const waUrl = `https://wa.me/${CONSTANTS.whatsappNumber}?text=${encodeURIComponent(
    'Hola, tengo una consulta sobre la política de privacidad.',
  )}`

  return (
    <main className="min-h-screen bg-[#080c14]">
      {/* Header */}
      <header className="border-b border-[#1e293b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Volver al inicio
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0">
              <Dna className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <div className="text-sm font-bold tracking-widest text-white uppercase">
                DIAGNÓSTICOS CARACAS
              </div>
              <div className="text-[10px] tracking-wider text-blue-400/70 uppercase font-medium">
                Biotecnología &amp; Cirugía Plástica
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white text-balance mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 leading-relaxed text-pretty">
            Esta política explica qué datos recolectamos a través de este sitio web, con qué
            finalidad los usamos y cómo puedes controlarlos.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-10">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <section key={section.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/25 shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-lg font-bold text-white">{section.title}</h2>
                </div>
                <div className="flex flex-col gap-3 pl-11">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-sm text-slate-400 leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 rounded-xl border border-[#1e293b] bg-[#111827]">
          <h2 className="text-sm font-bold text-white mb-2">
            ¿Quieres eliminar o corregir tus datos?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Escríbenos y atenderemos tu solicitud. No necesitas justificar tu petición.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl border border-green-500/30 hover:bg-green-500/15 hover:border-green-400/60 text-green-300 text-xs font-semibold transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          Última actualización: febrero de 2026 · Diagnósticos Caracas, San Bernardino, Caracas,
          Venezuela.
        </p>
      </div>
    </main>
  )
}
