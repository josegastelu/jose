"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Heart, Brain, Users, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = {
  fr: {
    "gerer-anxiete-quotidien": {
      title: "Comment gérer l'anxiété au quotidien",
      excerpt:
        "L'anxiété fait partie de la vie, mais elle ne doit pas la contrôler. Découvrez des stratégies pratiques pour retrouver votre sérénité.",
      category: "mentalHealth",
      date: "2024-01-15",
      readTime: "5 min",
      image: "/blog-anxiety-management.jpg",
      content: `
        <p>L'anxiété est une réaction naturelle de notre organisme face à une situation perçue comme menaçante. Cependant, lorsqu'elle devient excessive ou persistante, elle peut considérablement impacter notre qualité de vie.</p>

        <h2>Comprendre l'anxiété</h2>
        <p>L'anxiété se manifeste par des symptômes physiques (palpitations, sueurs, tensions musculaires) et psychologiques (inquiétudes, ruminations, difficultés de concentration). Il est important de reconnaître ces signaux pour mieux les apprivoiser.</p>

        <h2>Techniques de gestion immédiate</h2>
        <h3>1. La respiration profonde</h3>
        <p>Prenez une inspiration lente par le nez pendant 4 secondes, retenez votre souffle 4 secondes, puis expirez par la bouche pendant 6 secondes. Répétez cette séquence 5 à 10 fois.</p>

        <h3>2. L'ancrage dans le présent</h3>
        <p>Utilisez la technique du 5-4-3-2-1 : identifiez 5 choses que vous voyez, 4 que vous entendez, 3 que vous touchez, 2 que vous sentez, et 1 que vous goûtez.</p>

        <h3>3. La relaxation musculaire progressive</h3>
        <p>Contractez puis relâchez progressivement chaque groupe musculaire, en commençant par les pieds et en remontant vers la tête.</p>

        <h2>Stratégies à long terme</h2>
        <p>Au-delà des techniques d'urgence, il est essentiel de développer des habitudes qui renforcent votre résistance au stress :</p>
        <ul>
          <li>Maintenir une routine de sommeil régulière</li>
          <li>Pratiquer une activité physique régulière</li>
          <li>Limiter la consommation de caféine et d'alcool</li>
          <li>Cultiver des relations sociales positives</li>
          <li>Pratiquer la méditation ou la pleine conscience</li>
        </ul>

        <h2>Quand consulter ?</h2>
        <p>Si l'anxiété persiste malgré vos efforts, n'hésitez pas à consulter un professionnel. La thérapie cognitivo-comportementale s'avère particulièrement efficace pour traiter les troubles anxieux.</p>

        <p>Rappelez-vous : demander de l'aide est un signe de force, pas de faiblesse. Vous méritez de vivre sereinement.</p>
      `,
    },
    "communication-couple": {
      title: "Les clés d'une communication saine en couple",
      excerpt:
        "Une communication efficace est la base d'une relation épanouie. Apprenez les techniques pour mieux vous comprendre.",
      category: "relationships",
      date: "2024-01-10",
      readTime: "7 min",
      image: "/blog-couple-communication.jpg",
      content: `
        <p>La communication est le pilier de toute relation amoureuse épanouie. Pourtant, bien communiquer ne s'improvise pas et nécessite des compétences que nous pouvons tous développer.</p>

        <h2>Les fondements d'une communication saine</h2>
        <h3>L'écoute active</h3>
        <p>Écouter ne signifie pas simplement attendre son tour de parler. L'écoute active implique de :</p>
        <ul>
          <li>Porter toute son attention à son partenaire</li>
          <li>Reformuler ce qu'on a compris</li>
          <li>Poser des questions pour clarifier</li>
          <li>Éviter de juger ou d'interrompre</li>
        </ul>

        <h3>L'expression des besoins</h3>
        <p>Apprenez à exprimer vos besoins de manière claire et bienveillante. Utilisez le "je" plutôt que le "tu" accusateur : "Je me sens..." plutôt que "Tu fais toujours..."</p>

        <h2>Gérer les conflits constructivement</h2>
        <h3>La règle du temps mort</h3>
        <p>Lorsque les émotions sont trop intenses, accordez-vous une pause. Convenez d'un signal pour reporter la discussion à un moment plus propice.</p>

        <h3>Se concentrer sur le problème, pas sur la personne</h3>
        <p>Attaquez-vous au problème ensemble plutôt que de vous attaquer mutuellement. Vous êtes une équipe face aux difficultés.</p>

        <h2>Cultiver l'intimité émotionnelle</h2>
        <p>Partagez régulièrement vos émotions, vos rêves, vos préoccupations. Créez des moments privilégiés pour échanger sans distraction (téléphones, télévision...).</p>

        <h2>Les pièges à éviter</h2>
        <ul>
          <li>Les généralisations ("toujours", "jamais")</li>
          <li>Les reproches du passé</li>
          <li>Le mépris et les sarcasmes</li>
          <li>La fuite ou le silence punitif</li>
        </ul>

        <p>Une communication saine se cultive au quotidien. Soyez patients avec vous-même et votre partenaire dans cet apprentissage.</p>
      `,
    },
  },
  es: {
    "gerer-anxiete-quotidien": {
      title: "Cómo manejar la ansiedad en el día a día",
      excerpt:
        "La ansiedad es parte de la vida, pero no debe controlarla. Descubra estrategias prácticas para recuperar su serenidad.",
      category: "mentalHealth",
      date: "2024-01-15",
      readTime: "5 min",
      image: "/blog-anxiety-management.jpg",
      content: `
        <p>La ansiedad es una reacción natural de nuestro organismo ante una situación percibida como amenazante. Sin embargo, cuando se vuelve excesiva o persistente, puede impactar considerablemente nuestra calidad de vida.</p>

        <h2>Entender la ansiedad</h2>
        <p>La ansiedad se manifiesta a través de síntomas físicos (palpitaciones, sudores, tensiones musculares) y psicológicos (preocupaciones, rumiaciones, dificultades de concentración). Es importante reconocer estas señales para poder manejarlas mejor.</p>

        <h2>Técnicas de manejo inmediato</h2>
        <h3>1. Respiración profunda</h3>
        <p>Tome una inspiración lenta por la nariz durante 4 segundos, mantenga la respiración 4 segundos, luego exhale por la boca durante 6 segundos. Repita esta secuencia de 5 a 10 veces.</p>

        <h3>2. Anclaje en el presente</h3>
        <p>Use la técnica del 5-4-3-2-1: identifique 5 cosas que ve, 4 que escucha, 3 que toca, 2 que huele, y 1 que saborea.</p>

        <h3>3. Relajación muscular progresiva</h3>
        <p>Contraiga y luego relaje progresivamente cada grupo muscular, comenzando por los pies y subiendo hacia la cabeza.</p>

        <h2>Estrategias a largo plazo</h2>
        <p>Más allá de las técnicas de emergencia, es esencial desarrollar hábitos que fortalezcan su resistencia al estrés:</p>
        <ul>
          <li>Mantener una rutina de sueño regular</li>
          <li>Practicar actividad física regular</li>
          <li>Limitar el consumo de cafeína y alcohol</li>
          <li>Cultivar relaciones sociales positivas</li>
          <li>Practicar meditación o mindfulness</li>
        </ul>

        <h2>¿Cuándo consultar?</h2>
        <p>Si la ansiedad persiste a pesar de sus esfuerzos, no dude en consultar a un profesional. La terapia cognitivo-conductual resulta particularmente eficaz para tratar los trastornos de ansiedad.</p>

        <p>Recuerde: pedir ayuda es una señal de fortaleza, no de debilidad. Usted merece vivir serenamente.</p>
      `,
    },
    "communication-couple": {
      title: "Las claves de una comunicación sana en pareja",
      excerpt: "Una comunicación efectiva es la base de una relación plena. Aprenda técnicas para entenderse mejor.",
      category: "relationships",
      date: "2024-01-10",
      readTime: "7 min",
      image: "/blog-couple-communication.jpg",
      content: `
        <p>La comunicación es el pilar de toda relación amorosa plena. Sin embargo, comunicarse bien no se improvisa y requiere habilidades que todos podemos desarrollar.</p>

        <h2>Los fundamentos de una comunicación sana</h2>
        <h3>Escucha activa</h3>
        <p>Escuchar no significa simplemente esperar el turno para hablar. La escucha activa implica:</p>
        <ul>
          <li>Prestar toda la atención a su pareja</li>
          <li>Reformular lo que se ha entendido</li>
          <li>Hacer preguntas para aclarar</li>
          <li>Evitar juzgar o interrumpir</li>
        </ul>

        <h3>Expresión de necesidades</h3>
        <p>Aprenda a expresar sus necesidades de manera clara y benevolente. Use el "yo" en lugar del "tú" acusador: "Me siento..." en lugar de "Tú siempre..."</p>

        <h2>Manejar conflictos constructivamente</h2>
        <h3>La regla del tiempo fuera</h3>
        <p>Cuando las emociones son demasiado intensas, tómense un descanso. Acuerden una señal para posponer la discusión a un momento más propicio.</p>

        <h3>Concentrarse en el problema, no en la persona</h3>
        <p>Ataquen el problema juntos en lugar de atacarse mutuamente. Son un equipo frente a las dificultades.</p>

        <h2>Cultivar la intimidad emocional</h2>
        <p>Compartan regularmente sus emociones, sueños, preocupaciones. Creen momentos privilegiados para intercambiar sin distracciones (teléfonos, televisión...).</p>

        <h2>Trampas a evitar</h2>
        <ul>
          <li>Las generalizaciones ("siempre", "nunca")</li>
          <li>Los reproches del pasado</li>
          <li>El desprecio y los sarcasmos</li>
          <li>La huida o el silencio punitivo</li>
        </ul>

        <p>Una comunicación sana se cultiva día a día. Sean pacientes consigo mismos y con su pareja en este aprendizaje.</p>
      `,
    },
  },
}

const categoryIcons = {
  mentalHealth: Brain,
  relationships: Users,
  therapy: Heart,
}

const categories = {
  fr: {
    mentalHealth: "Santé mentale",
    relationships: "Relations",
    therapy: "Thérapie",
  },
  es: {
    mentalHealth: "Salud mental",
    relationships: "Relaciones",
    therapy: "Terapia",
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [currentLang, setCurrentLang] = useState<"fr" | "es">("fr")

  const post = blogPosts[currentLang][params.slug as keyof (typeof blogPosts)[typeof currentLang]]

  if (!post) {
    notFound()
  }

  const CategoryIcon = categoryIcons[post.category as keyof typeof categoryIcons]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(currentLang === "fr" ? "fr-FR" : "es-ES", {
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
              {currentLang === "fr" ? "Retour au blog" : "Volver al blog"}
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
              {currentLang === "fr" ? "Partager" : "Compartir"}
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
              {currentLang === "fr" ? "Besoin d'accompagnement ?" : "¿Necesita acompañamiento?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {currentLang === "fr"
                ? "Si cet article vous a interpellé, n'hésitez pas à prendre rendez-vous pour un accompagnement personnalisé."
                : "Si este artículo le ha llamado la atención, no dude en hacer una cita para un acompañamiento personalizado."}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              {currentLang === "fr" ? "Prendre rendez-vous" : "Hacer una cita"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
