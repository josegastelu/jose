"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Calendar, HelpCircle } from "lucide-react"

const content = {
  fr: {
    hero: {
      title: "Questions Fréquentes",
      subtitle: "Trouvez les réponses à vos questions sur la thérapie",
    },
    faqs: [
      {
        question: "Comment se déroule une séance de thérapie ?",
        answer:
          "Une séance de thérapie dure généralement 50 minutes pour les consultations individuelles et 60 minutes pour les thérapies de couple ou familiales. Nous commençons par faire le point sur votre état actuel, puis nous explorons ensemble les sujets qui vous préoccupent. J'utilise différentes techniques thérapeutiques adaptées à vos besoins spécifiques. L'atmosphère est bienveillante et sans jugement, permettant un échange authentique et constructif.",
      },
      {
        question: "Comment fonctionnent les téléconsultations ?",
        answer:
          "Les téléconsultations se déroulent via une plateforme sécurisée et confidentielle. Vous avez besoin d'un ordinateur, tablette ou smartphone avec une connexion internet stable. La qualité de l'accompagnement reste la même qu'en présentiel. Je propose également une consultation gratuite de 15 minutes en ligne pour vous familiariser avec l'outil et répondre à vos premières questions. Les téléconsultations sont particulièrement adaptées si vous avez des difficultés de déplacement ou préférez le confort de votre domicile.",
      },
      {
        question: "Quel est l'âge minimum pour consulter ?",
        answer:
          "Je reçois les personnes à partir de 18 ans. Pour les mineurs, il est nécessaire d'avoir l'autorisation des parents ou tuteurs légaux. Si vous cherchez un accompagnement pour un enfant ou un adolescent, je peux vous orienter vers des collègues spécialisés en psychologie de l'enfant et de l'adolescent.",
      },
      {
        question: "À quelle fréquence dois-je venir en consultation ?",
        answer:
          "La fréquence des séances dépend de vos besoins et objectifs. Généralement, nous commençons par des séances hebdomadaires ou bi-hebdomadaires, puis nous pouvons espacer selon votre évolution. Certaines personnes bénéficient d'un suivi ponctuel, d'autres préfèrent un accompagnement plus régulier. Nous définirons ensemble le rythme qui vous convient le mieux.",
      },
      {
        question: "Combien de temps dure une thérapie ?",
        answer:
          "La durée d'une thérapie varie selon chaque personne et ses objectifs. Certains consultent pour quelques séances afin de surmonter une difficulté ponctuelle, d'autres s'engagent dans un travail plus approfondi sur plusieurs mois. Il n'y a pas de durée imposée - nous faisons le point régulièrement sur vos progrès et vos besoins.",
      },
      {
        question: "Que se passe-t-il si je dois annuler un rendez-vous ?",
        answer:
          "Je comprends que des imprévus peuvent survenir. Je demande simplement de me prévenir au moins 24h à l'avance pour annuler ou reporter un rendez-vous. En cas d'annulation tardive (moins de 24h) sans motif valable, la séance pourra être facturée. Cette politique permet de respecter le temps de chacun et de proposer le créneau à d'autres patients si nécessaire.",
      },
      {
        question: "Comment prendre rendez-vous ?",
        answer:
          "Vous pouvez prendre rendez-vous directement via le calendrier en ligne sur ce site, m'appeler ou m'envoyer un message WhatsApp. Je propose également une consultation gratuite de 15 minutes pour faire connaissance et répondre à vos premières questions avant de commencer un suivi thérapeutique.",
      },
      {
        question: "Que dois-je apporter lors de ma première séance ?",
        answer:
          "Pour votre première séance, apportez simplement votre motivation et vos questions. Si vous avez des documents médicaux pertinents (prescriptions, bilans...), vous pouvez les apporter, mais ce n'est pas obligatoire. L'essentiel est de venir avec vos préoccupations et vos objectifs pour que nous puissions définir ensemble le meilleur accompagnement pour vous.",
      },
    ],
    cta: {
      title: "Vous avez d'autres questions ?",
      description: "N'hésitez pas à me contacter pour toute question supplémentaire",
      button: "Me contacter",
    },
  },
  es: {
    hero: {
      title: "Preguntas Frecuentes",
      subtitle: "Encuentre respuestas a sus preguntas sobre terapia",
    },
    faqs: [
      {
        question: "¿Cómo se desarrolla una sesión de terapia?",
        answer:
          "Una sesión de terapia dura generalmente 50 minutos para consultas individuales y 60 minutos para terapias de pareja o familiares. Comenzamos haciendo un balance de su estado actual, luego exploramos juntos los temas que le preocupan. Utilizo diferentes técnicas terapéuticas adaptadas a sus necesidades específicas. El ambiente es benevolente y sin juicio, permitiendo un intercambio auténtico y constructivo.",
      },
      {
        question: "¿Cómo funcionan las teleconsultas?",
        answer:
          "Las teleconsultas se realizan a través de una plataforma segura y confidencial. Necesita un ordenador, tableta o smartphone con conexión a internet estable. La calidad del acompañamiento sigue siendo la misma que en persona. También ofrezco una consulta gratuita de 15 minutos en línea para familiarizarse con la herramienta y responder a sus primeras preguntas. Las teleconsultas son particularmente adecuadas si tiene dificultades de desplazamiento o prefiere la comodidad de su hogar.",
      },
      {
        question: "¿Cuál es la edad mínima para consultar?",
        answer:
          "Recibo a personas a partir de los 18 años. Para menores, es necesario tener la autorización de los padres o tutores legales. Si busca acompañamiento para un niño o adolescente, puedo orientarle hacia colegas especializados en psicología infantil y del adolescente.",
      },
      {
        question: "¿Con qué frecuencia debo venir a consulta?",
        answer:
          "La frecuencia de las sesiones depende de sus necesidades y objetivos. Generalmente, comenzamos con sesiones semanales o quincenales, luego podemos espaciar según su evolución. Algunas personas se benefician de un seguimiento puntual, otras prefieren un acompañamiento más regular. Definiremos juntos el ritmo que mejor le convenga.",
      },
      {
        question: "¿Cuánto tiempo dura una terapia?",
        answer:
          "La duración de una terapia varía según cada persona y sus objetivos. Algunos consultan por algunas sesiones para superar una dificultad puntual, otros se comprometen en un trabajo más profundo durante varios meses. No hay duración impuesta - hacemos balance regularmente sobre sus progresos y necesidades.",
      },
      {
        question: "¿Qué pasa si debo cancelar una cita?",
        answer:
          "Entiendo que pueden surgir imprevistos. Solo pido que me avise con al menos 24h de antelación para cancelar o posponer una cita. En caso de cancelación tardía (menos de 24h) sin motivo válido, la sesión podrá ser facturada. Esta política permite respetar el tiempo de cada uno y ofrecer el horario a otros pacientes si es necesario.",
      },
      {
        question: "¿Cómo reservar una cita?",
        answer:
          "Puede reservar una cita directamente a través del calendario en línea en este sitio, llamarme o enviarme un mensaje de WhatsApp. También ofrezco una consulta gratuita de 15 minutos para conocernos y responder a sus primeras preguntas antes de comenzar un seguimiento terapéutico.",
      },
      {
        question: "¿Qué debo traer a mi primera sesión?",
        answer:
          "Para su primera sesión, traiga simplemente su motivación y sus preguntas. Si tiene documentos médicos pertinentes (prescripciones, balances...), puede traerlos, pero no es obligatorio. Lo esencial es venir con sus preocupaciones y objetivos para que podamos definir juntos el mejor acompañamiento para usted.",
      },
    ],
    cta: {
      title: "¿Tiene otras preguntas?",
      description: "No dude en contactarme para cualquier pregunta adicional",
      button: "Contactarme",
    },
  },
  en: {
    hero: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about therapy",
    },
    faqs: [
      {
        question: "How does a therapy session work?",
        answer:
          "A therapy session typically lasts 50 minutes for individual consultations and 60 minutes for couples. We start by checking in on how you are, then explore the topics you want to work on. I use different therapeutic tools tailored to your needs. The space is caring and non-judgmental, allowing for open and constructive discussion.",
      },
      {
        question: "How do online sessions work?",
        answer:
          "Online sessions take place through a secure and confidential platform. You only need a computer, tablet, or smartphone with a stable internet connection. The quality of care is the same as in-person. I also offer a free 15‑minute online consultation to get familiar with the tool and answer initial questions. Online sessions are ideal if travel is difficult or you prefer the comfort of home.",
      },
      {
        question: "What is the minimum age to book a session?",
        answer:
          "I see clients from age 18. For minors, parental or legal guardian consent is required. If you are looking for support for a child or teen, I can refer you to colleagues specialized in child and adolescent psychology.",
      },
      {
        question: "How often should I come to therapy?",
        answer:
          "Session frequency depends on your needs and goals. We usually start weekly or every two weeks, then space out as you progress. Some people benefit from occasional check-ins, others prefer regular support. We will define together the rhythm that fits you best.",
      },
      {
        question: "How long does therapy last?",
        answer:
          "Therapy length varies for each person and their objectives. Some attend a few sessions to address a specific difficulty, others engage in deeper work over several months. There is no imposed duration — we regularly review your progress and needs.",
      },
      {
        question: "What if I need to cancel an appointment?",
        answer:
          "I understand unexpected events happen. Please let me know at least 24 hours in advance to cancel or reschedule. For late cancellations (less than 24 hours) without valid reason, the session may be charged. This policy respects everyone’s time and allows me to offer the slot to others if needed.",
      },
      {
        question: "How can I book an appointment?",
        answer:
          "You can book directly through the online calendar on this site, call me, or send a WhatsApp message. I also offer a free 15‑minute consultation to get to know each other and answer your initial questions before starting therapy.",
      },
      {
        question: "What should I bring to my first session?",
        answer:
          "Just bring your motivation and questions. If you have relevant medical documents (prescriptions, reports, etc.), you may bring them — it’s optional. What matters most is coming with your concerns and goals so we can define the best approach together.",
      },
    ],
    cta: {
      title: "Still have questions?",
      description: "Feel free to contact me for any additional information",
      button: "Contact me",
    },
  },
}

export default function FAQPage() {
  const [currentLang, setCurrentLang] = useState<"fr" | "es" | "en">("fr")
  const [openItems, setOpenItems] = useState<number[]>([])
  const t = content[currentLang]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang as any} onLanguageChange={setCurrentLang as any} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
          style={{
            backgroundImage: `url('/faq-therapy-questions-answers.png')`,
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <Card key={index} className="glass-card border-0 liquid-transition">
                <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <CollapsibleTrigger asChild>
                    <CardContent className="p-6 cursor-pointer hover:bg-muted/20 liquid-transition">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <HelpCircle className="w-4 h-4 text-primary" />
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground liquid-transition flex-shrink-0 ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="ml-12">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
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
