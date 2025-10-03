"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"

const testimonials = {
  fr: [
    {
      text: "Une écoute exceptionnelle",
      author: "Marie L.",
      rating: 5,
    },
    {
      text: "Approche très professionnelle",
      author: "Pierre M.",
      rating: 5,
    },
    {
      text: "M'a vraiment aidé à avancer",
      author: "Sophie D.",
      rating: 5,
    },
    {
      text: "Conseils très précieux",
      author: "Antoine R.",
      rating: 5,
    },
  ],
  es: [
    {
      text: "Una escucha excepcional",
      author: "María L.",
      rating: 5,
    },
    {
      text: "Enfoque muy profesional",
      author: "Pedro M.",
      rating: 5,
    },
    {
      text: "Me ayudó mucho a avanzar",
      author: "Sofía D.",
      rating: 5,
    },
    {
      text: "Consejos muy valiosos",
      author: "Antonio R.",
      rating: 5,
    },
  ],
}

interface FloatingTestimonialProps {
  currentLang: "fr" | "es"
}

export function FloatingTestimonial({ currentLang }: FloatingTestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTestimonials = testimonials[currentLang]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentTestimonials.length])

  const currentTestimonial = currentTestimonials[currentIndex]

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-float">
      <Card className="glass-card border-0 shadow-lg max-w-xs">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex mb-2">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-foreground mb-1 leading-tight">{currentTestimonial.text}</p>
              <p className="text-xs text-muted-foreground">— {currentTestimonial.author}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
