"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Heart, Brain, Users, Share2 } from "lucide-react"
import Link from "next/link"
import { blogPosts, categories } from "../postsData"

const categoryIcons = {
  mentalHealth: Brain,
  relationships: Users,
  therapy: Heart,
}

export default function PostPageClient({ params }: { params: { slug: string } }) {
  const [currentLang, setCurrentLang] = useState<"fr" | "es" | "en">("fr")

  const post = blogPosts[currentLang][params.slug as keyof (typeof blogPosts)[typeof currentLang]]

  const CategoryIcon = categoryIcons[post.category as keyof typeof categoryIcons]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const locale = currentLang === "fr" ? "fr-FR" : currentLang === "es" ? "es-ES" : "en-US"
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
          style={{
            backgroundImage: `url('${post.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 glass-effect" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-white hover:text-white/80 liquid-transition">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentLang === "fr" ? "Retour au blog" : currentLang === "es" ? "Volver al blog" : "Back to blog"}
            </Button>
          </Link>

          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <CategoryIcon className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-foreground">
                {categories[currentLang][post.category as keyof (typeof categories)[typeof currentLang]]}
              </span>
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-white/90">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80 liquid-transition">
              <Share2 className="w-4 h-4 mr-2" />
              {currentLang === "fr" ? "Partager" : currentLang === "es" ? "Compartir" : "Share"}
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-0">
            <CardContent className="p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={
                  {
                    "--tw-prose-headings": "var(--foreground)",
                    "--tw-prose-body": "var(--foreground)",
                    "--tw-prose-links": "var(--primary)",
                  } as any
                }
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-xl p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {currentLang === "fr" ? "Besoin d'accompagnement ?" : currentLang === "es" ? "¿Necesita acompañamiento?" : "Need support?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {currentLang === "fr"
                ? "Si cet article vous a interpellé, n'hésitez pas à prendre rendez-vous pour un accompagnement personnalisé."
                : currentLang === "es"
                ? "Si este artículo le ha llamado la atención, no dude en hacer una cita para un acompañamiento personalizado."
                : "If this article resonated with you, feel free to book a session for personalized support."}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              {currentLang === "fr" ? "Prendre rendez-vous" : currentLang === "es" ? "Hacer una cita" : "Book an appointment"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


