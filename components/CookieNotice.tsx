'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'dccs-cookie-notice-v1'

export default function CookieNotice() {
  // Arranca oculto para que el servidor y el cliente rendericen lo mismo.
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // Si el navegador bloquea el almacenamiento, no mostramos el aviso
      // en bucle: preferimos no molestar en cada carga.
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString())
    } catch {
      // Sin almacenamiento disponible el aviso reaparecerá; es aceptable.
    }
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-[#1e293b] bg-[#111827]/95 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/25 shrink-0">
              <Cookie className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed text-pretty">
              Usamos únicamente cookies técnicas necesarias para el funcionamiento del sitio.
              Puedes gestionarlas desde tu navegador.{' '}
              <Link
                href="/privacidad"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                Ver política de privacidad
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 sm:pl-2">
            <button
              type="button"
              onClick={dismiss}
              className="flex-1 sm:flex-none py-2 px-4 rounded-lg border border-blue-500/30 hover:bg-blue-500/15 hover:border-blue-400/60 text-blue-300 text-xs font-semibold transition-all duration-200"
            >
              Entendido
            </button>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Cerrar aviso de cookies"
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#1e293b] hover:border-slate-600 text-slate-500 hover:text-slate-300 transition-all duration-200"
            >
              <X className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
