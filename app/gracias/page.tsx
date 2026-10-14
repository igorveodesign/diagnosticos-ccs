import type { Metadata } from 'next'
import ThankYouCard from '@/components/ThankYouCard'

export const metadata: Metadata = {
  title: 'Solicitud recibida | Diagnósticos Caracas',
  description:
    'Confirmación de solicitud de evaluación médica en Diagnósticos Caracas.',
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
  return <ThankYouCard />
}
