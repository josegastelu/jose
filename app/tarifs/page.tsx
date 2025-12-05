"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { openSchedulingPopup } from "@/components/googleScheduler"
import { Heart, Users, Home, GraduationCap, Clock, Calendar, CheckCircle, Gift, Video, MapPin } from "lucide-react"
import { PRICES } from "@/const/price"

const content = {
  fr: {
    hero: {
      title: "Tarifs",
      subtitle: "Des tarifs transparents pour un accompagnement de qualité",
    },
    freeConsultation: {
      title: "Consultation Gratuite",
      subtitle: "15 minutes pour faire connaissance",
      description:
        "Avant de commencer votre parcours thérapeutique, je vous offre une consultation gratuite de 15 minutes. C'est l'occasion de nous rencontrer, de discuter de vos besoins et de voir si nous pouvons travailler ensemble.",
      benefits: [
        "Aucun engagement",
        "Présentation de mon approche",
        "Évaluation de vos besoins",
        "Questions et réponses",
      ],
    },
    pricing: {
      individual: {
        title: "Thérapie Individuelle",
        priceInPerson: PRICES.individual.inPerson,
        priceVideo: PRICES.individual.video,
        duration: "50 minutes",
        description: "Séance personnalisée pour votre développement personnel et votre bien-être",
        features: [
          "Accompagnement personnalisé",
          "Approche humaniste",
          "Suivi régulier",
          "Outils thérapeutiques adaptés",
        ],
      },
      couple: {
        title: "Thérapie de Couple",
        priceInPerson: PRICES.couple.inPerson,
        priceVideo: PRICES.couple.video,
        duration: "60 minutes",
        description: "Séance dédiée à l'amélioration de votre relation amoureuse",
        features: [
          "Travail sur la communication",
          "Résolution des conflits",
          "Renforcement du lien",
          "Techniques relationnelles",
        ],
      },
      
      student: {
        title: "Tarif Étudiant.e.",
        priceInPerson: PRICES.student.inPerson,
        priceVideo: PRICES.student.video,
        duration: "50 minutes",
        description: "prix solidaire pour les étudiants",
        features: [
          "Tarif réduit",
          "Même qualité d'accompagnement",
          "Justificatif étudiant requis",
          "Accessible et bienveillant",
        ],
      },
    },
    sessionTypes: {
      inPerson: "Présentiel",
      video: "Vidéoconférence",
    },
    payment: {
      title: "Modalités de Paiement",
      methods: ["virement Interac", "Paiement en ligne sécurisé"],
      note: "Le paiement s'effectue à la fin de chaque séance. Possibilité de règlement mensuel sur demande.",
    },
    insurance: {
      title: "Remboursement",
      description:
        " Certaines  assurances remboursent les consultations thérapeutiques. N’hésitez par à vous renseigner auprès de votre assurance d’emploi.",
    },
    cta: {
      title: "Prêt à commencer ?",
      description: "Réservez votre consultation gratuite de 15 minutes",
      button: "Consultation gratuite",
    },
  },
  es: {
    hero: {
      title: "Tarifas",
      subtitle: "Tarifas transparentes para un acompañamiento de calidad",
    },
    freeConsultation: {
      title: "Consulta Gratuita",
      subtitle: "15 minutos para conocernos",
      description:
        "Antes de comenzar su camino terapéutico, le ofrezco una consulta gratuita de 15 minutos. Es la oportunidad de conocernos, discutir sus necesidades y ver si podemos trabajar juntos.",
      benefits: [
        "Sin compromiso",
        "Presentación de mi enfoque",
        "Evaluación de sus necesidades",
        "Preguntas y respuestas",
      ],
    },
    pricing: {
      individual: {
        title: "Terapia Individual",
        priceInPerson: PRICES.individual.inPerson,
        priceVideo: PRICES.individual.video,
        duration: "50 minutos",
        description: "Sesión personalizada para su desarrollo personal y bienestar",
        features: [
          "Acompañamiento personalizado",
          "Enfoque humanista",
          "Seguimiento regular",
          "Herramientas terapéuticas adaptadas",
        ],
      },
      couple: {
        title: "Terapia de Pareja",
        priceInPerson: PRICES.couple.inPerson,
        priceVideo: PRICES.couple.video,
        duration: "60 minutos",
        description: "Sesión dedicada a mejorar su relación amorosa",
        features: [
          "Trabajo en comunicación",
          "Resolución de conflictos",
          "Fortalecimiento del vínculo",
          "Técnicas relacionales",
        ],
      },
      student: {
        title: "Tarifa Estudiante",
        priceInPerson: PRICES.student.inPerson,
        priceVideo: PRICES.student.video,
        duration: "50 minutos",
        description: "Tarifa preferencial para estudiantes con justificante",
        features: [
          "Tarifa reducida",
          "Misma calidad de acompañamiento",
          "Justificante de estudiante requerido",
          "Accesible y benevolente",
        ],
      },
    },
    sessionTypes: {
      inPerson: "Presencial",
      video: "Videoconferencia",
    },
    payment: {
      title: "Modalidades de Pago",
      methods: ["Transferencia Interac", "Pago en línea seguro"],
      note: "El pago se realiza al final de cada sesión. Posibilidad de pago mensual bajo solicitud.",
    },
    insurance: {
      title: "Reembolso",
      description:
        "Algunos seguros reembolsan las consultas terapéuticas. Infórmese con su seguro de empleo.",
    },
    cta: {
      title: "¿Listo para comenzar?",
      description: "Reserve su consulta gratuita de 15 minutos",
      button: "Consulta gratuita",
    },
  },
  en: {
    hero: { title: "Pricing", subtitle: "Transparent rates for quality support" },
    freeConsultation: {
      title: "Free Consultation",
      subtitle: "15 minutes to get to know each other",
      description:
        "Before starting your therapeutic journey, I offer a free 15‑minute consultation. It’s an opportunity to meet, discuss your needs, and see if we’re a good fit.",
      benefits: ["No commitment", "Presentation of my approach", "Assessment of your needs", "Q&A"],
    },
    pricing: {
      individual: {
        title: "Individual Therapy",
        priceInPerson: PRICES.individual.inPerson,
        priceVideo: PRICES.individual.video,
        duration: "50 minutes",
        description: "Personalized session for your personal growth and well‑being",
        features: [
          "Personalized support",
          "Humanistic approach",
          "Regular follow‑up",
          "Tailored therapeutic tools",
        ],
      },
      couple: {
        title: "Couples Therapy",
        priceInPerson: PRICES.couple.inPerson,
        priceVideo: PRICES.couple.video,
        duration: "60 minutes",
        description: "Session dedicated to improving your relationship",
        features: [
          "Work on communication",
          "Conflict resolution",
          "Strengthening the bond",
          "Relational techniques",
        ],
      },
      student: {
        title: "Student Rate",
        priceInPerson: PRICES.student.inPerson,
        priceVideo: PRICES.student.video,
        duration: "50 minutes",
        description: "Solidarity rate for students",
        features: [
          "Reduced rate",
          "Same quality of support",
          "Student ID required",
          "Accessible and caring",
        ],
      },
    },
    sessionTypes: { inPerson: "In person", video: "Videoconference" },
    payment: {
      title: "Payment Methods",
      methods: ["Interac e‑Transfer", "Secure online payment"],
      note: "Payment is made at the end of each session. Monthly billing possible on request.",
    },
    insurance: {
      title: "Reimbursement",
      description:
        "Some insurances reimburse therapeutic consultations. Check with your employment insurance.",
    },
    cta: { title: "Ready to start?", description: "Book your free 15‑minute consultation", button: "Free consultation" },
  },
}

export default function PricingPage() {
  const [currentLang, setCurrentLang] = useState<"fr" | "es" | "en">("fr")
  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
          style={{
            backgroundImage: `url('/peaceful-therapy-pricing-consultation.png')`,
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

      {/* Free Consultation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-0 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.freeConsultation.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t.freeConsultation.subtitle}</p>
              <p className="text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">{t.freeConsultation.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {t.freeConsultation.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 justify-center md:justify-start">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3" onClick={() => openSchedulingPopup()}>
                <Calendar className="w-5 h-5 mr-2" />
                {t.cta.button}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.pricing.individual.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed min-h-20">{t.pricing.individual.description}</p>

                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{t.sessionTypes.inPerson}</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{t.pricing.individual.priceInPerson}</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Video className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium text-foreground">{t.sessionTypes.video}</span>
                    </div>
                    <div className="text-xl font-bold text-secondary">{t.pricing.individual.priceVideo}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {t.pricing.individual.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-end mt-auto px-8 pt-0">
                <Clock className="w-4 h-4" />
                <span className="ml-2">{t.pricing.individual.duration}</span>
              </CardFooter>
            </Card>

            {/* Couple Therapy */}
            <Card className="glass-card liquid-transition border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.pricing.couple.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed min-h-20">{t.pricing.couple.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{t.sessionTypes.inPerson}</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{t.pricing.couple.priceInPerson}</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Video className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium text-foreground">{t.sessionTypes.video}</span>
                    </div>
                    <div className="text-xl font-bold text-secondary">{t.pricing.couple.priceVideo}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {t.pricing.couple.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-end mt-auto px-8 pt-0">
                <Clock className="w-4 h-4" />
                <span className="ml-2">{t.pricing.couple.duration}</span>
              </CardFooter>
            </Card>

            

            {/* Student Pricing */}
            <Card className="glass-card liquid-transition border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{t.pricing.student.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed min-h-20">{t.pricing.student.description}</p>


                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{t.sessionTypes.inPerson}</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{t.pricing.student.priceInPerson}</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Video className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium text-foreground">{t.sessionTypes.video}</span>
                    </div>
                    <div className="text-xl font-bold text-secondary">{t.pricing.student.priceVideo}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {t.pricing.student.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

              </CardContent>
              <CardFooter className="justify-end mt-auto px-8 pt-0">
                <Clock className="w-4 h-4" />
                <span className="ml-2">{t.pricing.student.duration}</span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment & Insurance Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{t.payment.title}</h3>
                <div className="space-y-3 mb-6">
                  {t.payment.methods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{method}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.payment.note}</p>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{t.insurance.title}</h3>
                <p className="text-foreground leading-relaxed">{t.insurance.description}</p>
              </CardContent>
            </Card>
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
