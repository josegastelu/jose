"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { openSchedulingPopup } from "@/components/googleScheduler"
import { Heart, BookOpen, Calendar, CheckCircle } from "lucide-react"

const content = {
  fr: {
    hero: {
      title: "À propos de Jose Gastelu",
      subtitle:
        "Thérapeute clinicien membre OTSTCFQ, formé à la relation thérapeutique",
    },
    intro:
      "Je suis thérapeute clinicien membre OTSTCFQ. Ma formation est centrée sur la relation thérapeutique. Actuellement, j’approfondis mes connaissances à la Faculté de médecine et des sciences de la santé de l’Université de Sherbrooke, dans le cadre de la maîtrise clinique en dépendances. Mes travaux portent sur une recherche de type essai-synthèse, explorant les liens entre les dépendances et la résilience en tant que facteur de protection.",
    philosophy: {
      title: "Ma Philosophie",
      subtitle: "Une approche d'abord humaniste, ancrée dans l'ici et maintenant",
      description:
        "Mon approche repose sur une compréhension globale de la personne et de son environnement. J'ancre ma pratique dans l'« ici et maintenant » afin de co-construire des pistes de solution dans un climat de confiance, tout en respectant le rythme de chacun. L'empathie, l'ouverture d'esprit et la bienveillance sont les valeurs qui guident ma pratique professionnelle.",
      values: [
        { title: "Empathie", description: "Être à l'écoute de votre vécu, sans jugement" },
        { title: "Ouverture d'esprit", description: "Accueillir votre singularité et votre contexte" },
        { title: "Bienveillance", description: "Offrir un espace sécurisant et respectueux" },
        { title: "Respect du rythme", description: "Avancer à votre cadence, en co-construction" },
      ],
    },
    qualifications: {
      title: "Qualifications & Parcours",
      items: [
        "Master en dépendances – En cours – UdeS.",
        "BTS. Clinique – UQAT.",
        "B.sc. Mult. Profil intervention – UdeM.",
        "Int. Psychosociale – UQÀM.",
        "Formations :",
        "C. prévention de suicide – Santé Mentale.",
        "Thérapie cognitive-comportementale (TCC) – Santé Mentale.",
        "Couples, relations et troubles anxieux.",
        "Thérapie conjugale en action.",
      ],
    },
    approach: {
      title: "Mon Approche Thérapeutique",
      description:
        "J'intègre différentes approches selon vos besoins, toujours dans une perspective humaniste et collaborative :",
      methods: [
        { title: "Humaniste", description: "Compréhension globale et centrée sur la personne" },
        { title: "Cognitivo-comportementale (TCC)", description: "Adapter pensées et comportements à vos objectifs" },
        { title: "Motivationnelle", description: "Soutenir le changement à votre rythme" },
        { title: "Systémique", description: "Prendre en compte les dynamiques relationnelles" },
        { title: "Mindfulness", description: "Développer la pleine conscience et la régulation émotionnelle" },
      ],
    },
    practice: {
      title: "Ma Pratique",
      intro:
        "J'offre des services de consultation thérapeutique en suivis individuels et de couple, auprès d'une clientèle de jeunes adultes et d'adultes, en présentiel ou en visioconférence à Montréal.",
      collaborations:
        "Présentement, ma pratique clinique se déploie en collaboration avec la Clinique Duluth, GreenShield Santé ainsi que Santé Canada.",
      location: "Mon bureau est situé sur le Plateau Mont-Royal.",
    },
    emergency: {
      title: "Urgence santé mentale",
      items: [
        "Services généraux d’urgence : 911",
        "Centre de crise et de prévention du suicide : 1-866-277-3553",
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

      {/* Presentation Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <p className="text-foreground leading-relaxed">{t.intro}</p>
            </CardContent>
          </Card>
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

      {/* Emergency Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">{t.emergency.title}</h3>
              <ul className="space-y-2">
                {t.emergency.items.map((item: string, idx: number) => (
                  <li key={idx} className="text-foreground">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.practice.title}</h2>
          </div>

          <Card className="glass-card border-0">
            <CardContent className="p-8 space-y-4">
              <p className="text-foreground leading-relaxed">{t.practice.intro}</p>
              <p className="text-foreground leading-relaxed">{t.practice.collaborations}</p>
              <p className="text-foreground leading-relaxed">{t.practice.location}</p>
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3" onClick={() => openSchedulingPopup()}>
              <Calendar className="w-5 h-5 mr-2" />
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
