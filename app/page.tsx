'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PeptidesSection from '@/components/PeptidesSection'
import IndividualPeptidesSection from '@/components/IndividualPeptidesSection'
import SurgeriesSection from '@/components/SurgeriesSection'
import LocationSection from '@/components/LocationSection'
import LeadCaptureModal from '@/components/LeadCaptureModal'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#080c14] text-white">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <PeptidesSection />
      <IndividualPeptidesSection />
      <SurgeriesSection />
      <LocationSection />
      <Footer />
      <FloatingWhatsApp />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
