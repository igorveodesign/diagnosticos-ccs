import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import CookieNotice from '@/components/CookieNotice'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diagnósticos Caracas | Biotecnología Médica & Cirugía Plástica',
  description:
    'Clínica líder en biotecnología médica, péptidos de alta pureza (99%) y cirugía plástica de vanguardia en Caracas, Venezuela. Distribuidores exclusivos de Ascend Vials. Consulta médica presencial: $60.',
  keywords: [
    'cirugía plástica Caracas',
    'péptidos Venezuela',
    'biohacking Caracas',
    'Ascend Vials Venezuela',
    'mamoplastia Caracas',
    'lipoescultura Caracas',
    'rinoplastia Caracas',
    'BPC-157 Venezuela',
    'GLP-3 Venezuela',
    'MOTS-C',
  ],
  openGraph: {
    title: 'Diagnósticos Caracas | Biotecnología Médica & Cirugía Plástica',
    description:
      'Protocolos de optimización celular y procedimientos quirúrgicos con presupuestos base transparentes. Consulta médica de evaluación: $60.',
    locale: 'es_VE',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#080c14]">
      <body className={`${inter.className} antialiased bg-[#080c14]`}>
        {children}
        <CookieNotice />
      </body>
    </html>
  )
}
