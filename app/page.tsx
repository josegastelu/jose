"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingTestimonial } from "@/components/floating-testimonial"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Heart, Users, Video, Star, ArrowRight } from "lucide-react"

const content = {
  fr: {
    hero: {
      title: "Votre bien-être psychologique, ma priorité",
      subtitle: "Accompagnement thérapeutique avec une approche humaniste et empathique",
      cta: "Prendre rendez-vous",
      freeCta: "Consultation gratuite 15min",
    },
    services: {
      title: "Mes Services",
      subtitle: "Un accompagnement personnalisé pour chaque situation",
      individual: {
        title: "Thérapie Individuelle",
        description: "Accompagnement personnel pour surmonter les difficultés et développer votre potentiel",
      },
      couple: {
        title: "Thérapie de Couple",
        description: "Restaurer la communication et renforcer les liens dans votre relation",
      },
      family: {
        title: "Thérapie Familiale",
        description: "Harmoniser les relations familiales et résoudre les conflits",
      },
      online: {
        title: "Consultations en Ligne",
        description: "Thérapie accessible depuis chez vous, avec la même qualité d'accompagnement",
      },
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que disent mes patients",
      testimonial1: {
        text: "Jose m'a aidé à retrouver confiance en moi. Son approche bienveillante et professionnelle m'a permis de surmonter mes difficultés.",
        author: "Marie L.",
      },
      testimonial2: {
        text: "Grâce aux séances de thérapie de couple, nous avons pu sauver notre relation. Merci pour votre écoute et vos conseils précieux.",
        author: "Pierre et Sophie",
      },
      testimonial3: {
        text: "Les consultations en ligne sont très pratiques. Jose sait créer un climat de confiance même à distance.",
        author: "Antoine M.",
      },
    },
    appointment: {
      title: "Réserver votre consultation",
      subtitle: "Choisissez le créneau qui vous convient le mieux",
    },
  },
  es: {
    hero: {
      title: "Su bienestar psicológico, mi prioridad",
      subtitle: "Acompañamiento terapéutico con un enfoque humanista y empático",
      cta: "Reservar cita",
      freeCta: "Consulta gratuita 15min",
    },
    services: {
      title: "Mis Servicios",
      subtitle: "Un acompañamiento personalizado para cada situación",
      individual: {
        title: "Terapia Individual",
        description: "Acompañamiento personal para superar las dificultades y desarrollar su potencial",
      },
      couple: {
        title: "Terapia de Pareja",
        description: "Restaurar la comunicación y fortalecer los vínculos en su relación",
      },
      family: {
        title: "Terapia Familiar",
        description: "Armonizar las relaciones familiales y resolver conflictos",
      },
      online: {
        title: "Consultas en Línea",
        description: "Terapia accesible desde su hogar, con la misma calidad de acompañamiento",
      },
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen mis pacientes",
      testimonial1: {
        text: "Jose me ayudó a recuperar la confianza en mí mismo. Su enfoque benevolente y profesional me permitió superar mis dificultades.",
        author: "María L.",
      },
      testimonial2: {
        text: "Gracias a las sesiones de terapia de pareja, pudimos salvar nuestra relación. Gracias por su escucha y consejos valiosos.",
        author: "Pedro y Sofía",
      },
      testimonial3: {
        text: "Las consultas en línea son muy práctiques. Jose sabe crear un clima de confianza incluso a distancia.",
        author: "Antonio M.",
      },
    },
    appointment: {
      title: "Reserve su consulta",
      subtitle: "Elija el horario que mejor le convenga",
    },
  },
}

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<"fr" | "es">("fr")
  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <FloatingTestimonial currentLang={currentLang} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with glass effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
          style={{
            backgroundImage: `url('/serene-therapy-office-with-soft-natural-lighting-a.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 glass-effect" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 liquid-transition">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              {t.hero.cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card liquid-transition text-lg px-8 py-3 bg-transparent"
            >
              <Video className="w-5 h-5 mr-2" />
              {t.hero.freeCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card liquid-transition hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{t.services.individual.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.services.individual.description}</p>
              </CardContent>
            </Card>

            <Card className="glass-card liquid-transition hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{t.services.couple.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.services.couple.description}</p>
              </CardContent>
            </Card>

            <Card className="glass-card liquid-transition hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{t.services.family.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.services.family.description}</p>
              </CardContent>
            </Card>

            <Card className="glass-card liquid-transition hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{t.services.online.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.services.online.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Calendar Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.appointment.title}</h2>
            <p className="text-lg text-muted-foreground">{t.appointment.subtitle}</p>
          </div>

          <div className="glass-card rounded-xl p-8">
    
<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2JSblHLarI-8265xED0s68ramEfpt5PA7ShCL1II3He3GwpfhM8Fl5aS4Ro6C-9gT4txLJjeCl?gv=true" width="100%" height="600" ></iframe>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.testimonials.title}</h2>
            <p className="text-lg text-muted-foreground">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{t.testimonials.testimonial1.text}"</p>
                <p className="text-muted-foreground font-medium">— {t.testimonials.testimonial1.author}</p>
              </CardContent>
            </Card>

            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{t.testimonials.testimonial2.text}"</p>
                <p className="text-muted-foreground font-medium">— {t.testimonials.testimonial2.author}</p>
              </CardContent>
            </Card>

            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{t.testimonials.testimonial3.text}"</p>
                <p className="text-muted-foreground font-medium">— {t.testimonials.testimonial3.author}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-xl p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {currentLang === "fr" ? "Prêt à commencer votre parcours ?" : "¿Listo para comenzar su camino?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {currentLang === "fr"
                ? "Prenez le premier pas vers un mieux-être. Réservez votre consultation gratuite de 15 minutes."
                : "Dé el primer paso hacia el bienestar. Reserve su consulta gratuita de 15 minutos."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                {t.hero.freeCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect liquid-transition text-lg px-8 py-3 bg-transparent"
              >
                {currentLang === "fr" ? "En savoir plus" : "Saber más"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
