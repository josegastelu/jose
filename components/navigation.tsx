"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"

interface NavigationProps {
  currentLang: "fr" | "es"
  onLanguageChange: (lang: "fr" | "es") => void
}

const navItems = {
  fr: [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  es: [
    { href: "/", label: "Inicio" },
    { href: "/a-propos", label: "Acerca de" },
    { href: "/services", label: "Servicios" },
    { href: "/tarifs", label: "Tarifas" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contacto" },
  ],
}

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const visibleItems = navItems[currentLang].filter((item) => item.href !== "/blog")

  // Initialize language from localStorage on first mount
  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('preferredLang') : null
      if (stored === 'fr' || stored === 'es') {
        onLanguageChange(stored)
      }
    } catch (_) {
      // no-op if storage is unavailable
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav className="glass-effect fixed top-0 left-0 right-0 z-50 liquid-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-sm">JG</span>
            </div>
            <span className="font-serif font-bold text-xl text-foreground">Jose Gastelu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {visibleItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary liquid-transition font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Button
                variant={currentLang === "fr" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  try { localStorage.setItem('preferredLang', 'fr') } catch (_) {}
                  onLanguageChange("fr")
                }}
                className="text-xs"
              >
                FR
              </Button>
              <Button
                variant={currentLang === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  try { localStorage.setItem('preferredLang', 'es') } catch (_) {}
                  onLanguageChange("es")
                }}
                className="text-xs"
              >
                ES
              </Button>
            </div>

            {/* CTA Button */}
            <Button className="bg-primary hover:bg-primary/90 liquid-transition">
              {currentLang === "fr" ? "Prendre RDV" : "Reservar Cita"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card mt-2 rounded-lg p-4 space-y-4">
            {visibleItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary liquid-transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <Button
                  variant={currentLang === "fr" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    try { localStorage.setItem('preferredLang', 'fr') } catch (_) {}
                    onLanguageChange("fr")
                  }}
                  className="text-xs"
                >
                  FR
                </Button>
                <Button
                  variant={currentLang === "es" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    try { localStorage.setItem('preferredLang', 'es') } catch (_) {}
                    onLanguageChange("es")
                  }}
                  className="text-xs"
                >
                  ES
                </Button>
              </div>

              <Button className="bg-primary hover:bg-primary/90 liquid-transition">
                {currentLang === "fr" ? "Prendre RDV" : "Reservar Cita"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
