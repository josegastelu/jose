"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Calendar, CheckCircle } from "lucide-react"

const content = {
  fr: {
    hero: {
      title: "À propos de Jose Gastelu",
      subtitle: "Psychologue clinicien avec une approche humaniste et empathique",
    },
    philosophy: {
      title: "Ma Philosophie",
      subtitle: "Une approche centrée sur la personne",
      description:
        "Je crois profondément en la capacité de chaque individu à trouver ses propres solutions et à développer son potentiel. Mon approche humaniste place la personne au centre du processus thérapeutique, dans un climat de confiance, d'empathie et d'authenticité.",
      values: [
        {
          title: "Empathie",
          description: "Comprendre et ressentir ce que vous vivez sans jugement",
        },
        {
          title: "Bienveillance",
          description: "Créer un espace sécurisé pour votre épanouissement",
        },
        {
          title: "Authenticité",
          description: "Être vrai et transparent dans notre relation thérapeutique",
        },
        {
          title: "Respect",
          description: "Honorer votre rythme et vos choix personnels",
        },
      ],
    },
    qualifications: {
      title: "Qualifications & Formation",
      items: [
        "Master en Psychologie Clinique - Université de Madrid",
        "Spécialisation en Thérapie Humaniste",
        "Formation en Thérapie de Couple et Familiale",
        "Certification en Thérapie en Ligne",
        "15 ans d'expérience en pratique clinique",
        "Membre du Collège des Psychologues",
      ],
    },
    approach: {
      title: "Mon Approche Thérapeutique",
      description: "Ma méthode s'appuie sur plusieurs approches complémentaires, adaptées à vos besoins spécifiques :",
      methods: [
        {
          title: "Approche Humaniste",
          description: "Centrée sur votre potentiel de croissance et d'auto-actualisation",
        },
        {
          title: "Thérapie Cognitive-Comportementale",
          description: "Pour identifier et modifier les schémas de pensée limitants",
        },
        {
          title: "Thérapie Systémique",
          description: "Pour comprendre les dynamiques relationnelles et familiales",
        },
        {
          title: "Mindfulness",
          description: "Pour développer la conscience de soi et la gestion émotionnelle",
        },
      ],
    },
    cta: {
      title: "Prêt à commencer ?",
      description: "Prenez rendez-vous pour une consultation gratuite de 15 minutes",
      button: "Réserver une consultation",
    },
  },
  es: {
    hero: {
      title: "Acerca de Jose Gastelu",
      subtitle: "Psicólogo clínico con un enfoque humanista y empático",
    },
    philosophy: {
      title: "Mi Filosofía",
      subtitle: "Un enfoque centrado en la persona",
      description:
        "Creo profundamente en la capacidad de cada individuo para encontrar sus propias soluciones y desarrollar su potencial. Mi enfoque humanista coloca a la persona en el centro del proceso terapéutico, en un clima de confianza, empatía y autenticidad.",
      values: [
        {
          title: "Empatía",
          description: "Comprender y sentir lo que vives sin juicio",
        },
        {
          title: "Benevolencia",
          description: "Crear un espacio seguro para tu crecimiento",
        },
        {
          title: "Autenticidad",
          description: "Ser verdadero y transparente en nuestra relación terapéutica",
        },
        {
          title: "Respeto",
          description: "Honrar tu ritmo y tus decisiones personales",
        },
      ],
    },
    qualifications: {
      title: "Cualificaciones y Formación",
      items: [
        "Máster en Psicología Clínica - Universidad de Madrid",
        "Especialización en Terapia Humanista",
        "Formación en Terapia de Pareja y Familiar",
        "Certificación en Terapia en Línea",
        "15 años de experiencia en práctica clínica",
        "Miembro del Colegio de Psicólogos",
      ],
    },
    approach: {
      title: "Mi Enfoque Terapéutico",
      description: "Mi método se basa en varios enfoques complementarios, adaptados a sus necesidades específicas:",
      methods: [
        {
          title: "Enfoque Humanista",
          description: "Centrado en su potencial de crecimiento y auto-actualización",
        },
        {
          title: "Terapia Cognitivo-Conductual",
          description: "Para identificar y modificar los patrones de pensamiento limitantes",
        },
        {
          title: "Terapia Sistémica",
          description: "Para comprender las dinámicas relacionales y familiares",
        },
        {
          title: "Mindfulness",
          description: "Para desarrollar la conciencia de sí mismo y la gestión emocional",
        },
      ],
    },
    cta: {
      title: "¿Listo para comenzar?",
      description: "Reserve una cita para una consulta gratuita de 15 minutos",
      button: "Reservar una consulta",
    },
  },
}

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<"fr" | "es">("fr")
  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
          style={{
            backgroundImage: `url('/professional-psychologist-portrait-warm-office.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 glass-effect" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.hero.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.philosophy.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.philosophy.subtitle}</p>
            <p className="text-foreground leading-relaxed max-w-4xl mx-auto">{t.philosophy.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.philosophy.values.map((value, index) => (
              <Card key={index} className="glass-card liquid-transition hover:scale-105 border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.qualifications.title}</h2>
          </div>

          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.qualifications.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.approach.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.approach.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.approach.methods.map((method, index) => (
              <Card key={index} className="glass-card liquid-transition border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3">{method.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-xl p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">{t.cta.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.cta.description}</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
