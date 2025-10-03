"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Presentation, Video, Clock, Euro, Calendar, CheckCircle, Brain, Target } from "lucide-react"

const content = {
  fr: {
    hero: {
      title: "Mes Services",
      subtitle: "Un accompagnement thérapeutique adapté à vos besoins",
    },
    services: {
      individual: {
        title: "Thérapie Individuelle",
        description:
          "Un espace personnel pour explorer vos difficultés, développer votre potentiel et retrouver un équilibre émotionnel.",
        priceInPerson: "110$",
        priceVideo: "100$",
        duration: "50 minutes",
        benefits: [
          "Troubles anxieux",
          "Dépression",
          "Estime de soi",
          "Deuils",
          "Épuisement professionnel/académique",
          "Transition de vie",
        ],
      },
      couple: {
        title: "Thérapie de Couple",
        description: "Restaurer la communication, résoudre les conflits et renforcer votre relation amoureuse.",
        priceInPerson: "120$",
        priceVideo: "110$",
        duration: "60 minutes",
        benefits: [
          "Difficultés de couple",
          "Difficultés relationnelles",
          "Amélioration de la communication",
          "Résolution des conflits",
          "Reconstruction de la confiance",
          "Renforcement du lien",
        ],
      },
      training: {
        title: "Formations/Conférences",
        description: "Formations et conférences pour organismes et entreprises sur la santé mentale et le bien-être.",
        price: "Sur devis",
        duration: "Variable",
        benefits: [
          "Prévention de l'épuisement professionnel",
          "Gestion du stress en entreprise",
          "Sensibilisation à la santé mentale",
          "Formation des équipes",
          "Conférences personnalisées",
          "Accompagnement organisationnel",
        ],
      },
      online: {
        title: "Consultations en Ligne",
        description:
          "Thérapie accessible depuis chez vous avec la même qualité d'accompagnement qu'en présentiel. Consultation gratuite de 15 minutes disponible.",
        priceIndividual: "100$",
        priceCouple: "110$",
        duration: "50-60 minutes",
        benefits: [
          "Confort de votre domicile",
          "Flexibilité horaire",
          "Pas de déplacement",
          "Confidentialité renforcée",
          "Consultation gratuite de 15 min",
          "Plateforme sécurisée",
        ],
      },
    },
    specialties: {
      title: "Mes spécialités en traitement",
      subtitle: "Domaines d'expertise et approches thérapeutiques",
      areas: [
        "Troubles anxieux",
        "Dépression",
        "Dépendances",
        "Idéation suicidaire/crise",
        "Estime de soi",
        "Deuils",
        "Difficultés de couple",
        "Difficultés relationnelles",
        "Épuisement professionnel/académique",
        "Transition de vie",
      ],
      clientele: {
        title: "Clientèles cibles",
        groups: ["Adolescents", "Adultes", "Couples", "Organismes / entreprises"],
      },
      approach: {
        title: "Mon approche thérapeutique",
        description:
          "Son approche est d'abord humaniste. Elle se caractérise par une compréhension globale de l'individu et l'environnement dans lequel il interagit. Il fonde sa pratique sur l'ici et maintenant afin de développer des pistes de solutions dans la confiance et le respect du rythme de la personne. L'empathie, l'ouverture d'esprit et la bienveillance sont des valeurs qui guident sa pratique professionnelle.",
        methods:
          "Dans la spécificité de l'intervention thérapeutique, les approches cognitivo-comportementale (TCC), psychosociale, structurelles, centrée sur les solutions, interculturelles et bien d'autres sont utilisées dépendamment de la problématique.",
      },
    },
    process: {
      title: "Comment se déroule une séance ?",
      steps: [
        {
          title: "Premier Contact",
          description: "Consultation gratuite de 15 minutes pour faire connaissance et définir vos besoins",
        },
        {
          title: "Évaluation",
          description: "Première séance pour comprendre votre situation et établir un plan thérapeutique",
        },
        {
          title: "Accompagnement",
          description: "Séances régulières adaptées à votre rythme et vos objectifs personnels",
        },
        {
          title: "Évolution",
          description: "Suivi de vos progrès et ajustement de l'approche selon vos besoins",
        },
      ],
    },
    cta: {
      title: "Commencez votre parcours aujourd'hui",
      description: "Réservez votre consultation gratuite de 15 minutes",
      button: "Réserver maintenant",
    },
  },
  es: {
    hero: {
      title: "Mis Servicios",
      subtitle: "Un acompañamiento terapéutico adaptado a sus necesidades",
    },
    services: {
      individual: {
        title: "Terapia Individual",
        description:
          "Un espacio personal para explorar sus dificultades, desarrollar su potencial y recuperar el equilibrio emocional.",
        priceInPerson: "110$",
        priceVideo: "100$",
        duration: "50 minutos",
        benefits: [
          "Trastornos de ansiedad",
          "Depresión",
          "Autoestima",
          "Duelos",
          "Agotamiento profesional/académico",
          "Transición de vida",
        ],
      },
      couple: {
        title: "Terapia de Pareja",
        description: "Restaurar la comunicación, resolver conflictos y fortalecer su relación amorosa.",
        priceInPerson: "120$",
        priceVideo: "110$",
        duration: "60 minutos",
        benefits: [
          "Dificultades de pareja",
          "Dificultades relacionales",
          "Mejora de la comunicación",
          "Resolución de conflictos",
          "Reconstrucción de la confianza",
          "Fortalecimiento del vínculo",
        ],
      },
      training: {
        title: "Formaciones/Conferencias",
        description: "Formaciones y conferencias para organismos y empresas sobre salud mental y bienestar.",
        price: "Bajo presupuesto",
        duration: "Variable",
        benefits: [
          "Prevención del agotamiento profesional",
          "Gestión del estrés empresarial",
          "Sensibilización en salud mental",
          "Formación de equipos",
          "Conferencias personalizadas",
          "Acompañamiento organizacional",
        ],
      },
      online: {
        title: "Consultas en Línea",
        description:
          "Terapia accesible desde su hogar con la misma calidad de acompañamiento que en persona. Consulta gratuita de 15 minutos disponible.",
        priceIndividual: "100$",
        priceCouple: "110$",
        duration: "50-60 minutos",
        benefits: [
          "Comodidad de su hogar",
          "Flexibilidad horaria",
          "Sin desplazamientos",
          "Confidencialidad reforzada",
          "Consulta gratuita de 15 min",
          "Plataforma segura",
        ],
      },
    },
    specialties: {
      title: "Mis especialidades en tratamiento",
      subtitle: "Áreas de experiencia y enfoques terapéuticos",
      areas: [
        "Trastornos de ansiedad",
        "Depresión",
        "Dependencias",
        "Ideación suicida/crisis",
        "Autoestima",
        "Duelos",
        "Dificultades de pareja",
        "Dificultades relacionales",
        "Agotamiento profesional/académico",
        "Transición de vida",
      ],
      clientele: {
        title: "Clientelas objetivo",
        groups: ["Adolescentes", "Adultos", "Parejas", "Organismos / empresas"],
      },
      approach: {
        title: "Mi enfoque terapéutico",
        description:
          "Su enfoque es principalmente humanista. Se caracteriza por una comprensión global del individuo y el entorno en el que interactúa. Basa su práctica en el aquí y ahora para desarrollar pistas de soluciones en la confianza y el respeto del ritmo de la persona. La empatía, la apertura mental y la benevolencia son valores que guían su práctica profesional.",
        methods:
          "En la especificidad de la intervención terapéutica, se utilizan enfoques cognitivo-conductuales (TCC), psicosociales, estructurales, centrados en soluciones, interculturales y muchos otros dependiendo de la problemática.",
      },
    },
    process: {
      title: "¿Cómo se desarrolla una sesión?",
      steps: [
        {
          title: "Primer Contacto",
          description: "Consulta gratuita de 15 minutos para conocernos y definir sus necesidades",
        },
        {
          title: "Evaluación",
          description: "Primera sesión para comprender su situación y establecer un plan terapéutico",
        },
        {
          title: "Acompañamiento",
          description: "Sesiones regulares adaptadas a su ritmo y objetivos personales",
        },
        {
          title: "Evolución",
          description: "Seguimiento de su progreso y ajuste del enfoque según sus necesidades",
        },
      ],
    },
    cta: {
      title: "Comience su camino hoy",
      description: "Reserve su consulta gratuita de 15 minutos",
      button: "Reservar ahora",
    },
  },
}

export default function ServicesPage() {
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
            backgroundImage: `url('/therapy-session-comfortable-office-setting.png')`,
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

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Individual Therapy */}
            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src="/therapy-session-comfortable-office-setting.png"
                    alt="Thérapie individuelle - Séance de thérapie dans un bureau confortable"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.services.individual.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      <span>{t.services.individual.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Presencial:</span>
                    <span className="font-semibold text-primary">{t.services.individual.priceInPerson}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Videollamada:</span>
                    <span className="font-semibold text-secondary">{t.services.individual.priceVideo}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{t.services.individual.description}</p>
                <div className="space-y-2">
                  {t.services.individual.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Couple Therapy */}
            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src="/blog-couple-communication.jpg"
                    alt="Thérapie de couple - Communication et relation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.services.couple.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      <span>{t.services.couple.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Presencial:</span>
                    <span className="font-semibold text-primary">{t.services.couple.priceInPerson}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Videollamada:</span>
                    <span className="font-semibold text-secondary">{t.services.couple.priceVideo}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{t.services.couple.description}</p>
                <div className="space-y-2">
                  {t.services.couple.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src="/blog-work-stress.jpg"
                    alt="Formations et conférences - Environnement professionnel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Presentation className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.services.training.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center">
                        <Euro className="w-4 h-4 mr-1" />
                        {t.services.training.price}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {t.services.training.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.services.training.description}</p>
                <div className="space-y-2">
                  {t.services.training.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Online Therapy */}
            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src="/blog-therapy-benefits.jpg"
                    alt="Consultations en ligne - Thérapie à distance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.services.online.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      <span>{t.services.online.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Individual:</span>
                    <span className="font-semibold text-primary">{t.services.online.priceIndividual}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Couple:</span>
                    <span className="font-semibold text-secondary">{t.services.online.priceCouple}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{t.services.online.description}</p>
                <div className="space-y-2">
                  {t.services.online.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.specialties.title}</h2>
            <p className="text-lg text-muted-foreground">{t.specialties.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Treatment Specialties */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-6">{t.specialties.title}</h3>
                <div className="space-y-2">
                  {t.specialties.areas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Target Clientele */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-6">{t.specialties.clientele.title}</h3>
                <div className="space-y-4">
                  {t.specialties.clientele.groups.map((group, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-secondary/10 rounded-lg p-3">
                        <span className="font-medium text-foreground">{group}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Therapeutic Approach */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-6">{t.specialties.approach.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.specialties.approach.description}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.specialties.approach.methods}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.process.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <Card key={index} className="glass-card liquid-transition border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
