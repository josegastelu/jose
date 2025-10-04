"use client"

import { useEffect, useState } from "react"
import { SCHEDULE_URL } from "@/components/googleScheduler"

export default function SchedulingModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handler = () => {
      setLoading(true)
      setOpen(true)
    }
    window.addEventListener("open-scheduling-modal", handler)
    return () => window.removeEventListener("open-scheduling-modal", handler)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="bg-background rounded-xl shadow-xl w-[95vw] h-[85vh] max-w-4xl overflow-hidden relative">
        <button
          aria-label="Fermer"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-foreground/80 hover:text-foreground"
        >
          ✕
        </button>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin mb-3" />
              <p className="text-sm text-muted-foreground">Chargement du calendrier…</p>
            </div>
          </div>
        )}
        <iframe src={SCHEDULE_URL} className="w-full h-full" onLoad={() => setLoading(false)} />
      </div>
    </div>
  )
}


