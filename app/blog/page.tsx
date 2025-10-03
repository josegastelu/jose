"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Heart, Brain, Users } from "lucide-react"
import Link from "next/link"

const content = {
  fr: {
    hero: {
      title: "Blog",
      subtitle: "Conseils et réflexions sur la santé mentale et le bien-être",
    },
    readMore: "Lire la suite",
    categories: {
      all: "Tous",
      mentalHealth: "Santé mentale",
      relationships: "Relations",
      therapy: "Thérapie",
    },
    posts: [
      {
        id: "gerer-anxiete-quotidien",
        title: "Comment gérer l'anxiété au quotidien",
        excerpt:
          "L'anxiété fait partie de la vie, mais elle ne doit pas la contrôler. Découvrez des stratégies pratiques pour retrouver votre sérénité.",
        category: "mentalHealth",
        date: "2024-01-15",
        readTime: "5 min",
        image: "/blog-anxiety-management.jpg",
      },
      {
        id: "communication-couple",
        title: "Les clés d'une communication saine en couple",
        excerpt:
          "Une communication efficace est la base d'une relation épanouie. Apprenez les techniques pour mieux vous comprendre.",
        category: "relationships",
        date: "2024-01-10",
        readTime: "7 min",
        image: "/blog-couple-communication.jpg",
      },
      {
        id: "estime-de-soi",
        title: "Développer une estime de soi positive",
        excerpt:
          "L'estime de soi influence tous les aspects de notre vie. Découvrez comment cultiver une relation bienveillante avec vous-même.",
        category: "therapy",
        date: "2024-01-05",
        readTime: "6 min",
        image: "/blog-self-esteem.jpg",
      },
      {
        id: "stress-travail",
        title: "Gérer le stress au travail",
        excerpt:
          "Le stress professionnel peut affecter votre bien-être. Explorez des méthodes pour maintenir l'équilibre entre vie professionnelle et personnelle.",
        category: "mentalHealth",
        date: "2023-12-28",
        readTime: "8 min",
        image: "/blog-work-stress.jpg",
      },
      {
        id: "therapie-benefices",
        title: "Les bénéfices de la thérapie : démystifier les idées reçues",
        excerpt:
          "La thérapie reste parfois mal comprise. Découvrez comment elle peut vous aider à développer vos ressources personnelles.",
        category: "therapy",
        date: "2023-12-20",
        readTime: "10 min",
        image: "/blog-therapy-benefits.jpg",
      },
      {
        id: "relations-familiales",
        title: "Améliorer les relations familiales",
        excerpt:
          "Les dynamiques familiales peuvent être complexes. Apprenez à créer un environnement familial plus harmonieux et bienveillant.",
        category: "relationships",
        date: "2023-12-15",
        readTime: "6 min",
        image: "/blog-family-relationships.jpg",
      },
    ],
  },
  es: {
    hero: {
      title: "Blog",
      subtitle: "Consejos y reflexiones sobre salud mental y bienestar",
    },
    readMore: "Leer más",
    categories: {
      all: "Todos",
      mentalHealth: "Salud mental",
      relationships: "Relaciones",
      therapy: "Terapia",
    },
    posts: [
      {
        id: "gerer-anxiete-quotidien",
        title: "Cómo manejar la ansiedad en el día a día",
        excerpt:
          "La ansiedad es parte de la vida, pero no debe controlarla. Descubra estrategias prácticas para recuperar su serenidad.",
        category: "mentalHealth",
        date: "2024-01-15",
        readTime: "5 min",
        image: "/blog-anxiety-management.jpg",
      },
      {
        id: "communication-couple",
        title: "Las claves de una comunicación sana en pareja",
        excerpt: "Una comunicación efectiva es la base de una relación plena. Aprenda técnicas para entenderse mejor.",
        category: "relationships",
        date: "2024-01-10",
        readTime: "7 min",
        image: "/blog-couple-communication.jpg",
      },
      {
        id: "estime-de-soi",
        title: "Desarrollar una autoestima positiva",
        excerpt:
          "La autoestima influye en todos los aspectos de nuestra vida. Descubra cómo cultivar una relación benevolente consigo mismo.",
        category: "therapy",
        date: "2024-01-05",
        readTime: "6 min",
        image: "/blog-self-esteem.jpg",
      },
      {
        id: "stress-travail",
        title: "Manejar el estrés en el trabajo",
        excerpt:
          "El estrés profesional puede afectar su bienestar. Explore métodos para mantener el equilibrio entre vida profesional y personal.",
        category: "mentalHealth",
        date: "2023-12-28",
        readTime: "8 min",
        image: "/blog-work-stress.jpg",
      },
      {
        id: "therapie-benefices",
        title: "Los beneficios de la terapia: desmitificar ideas preconcebidas",
        excerpt:
          "La terapia a veces sigue siendo mal entendida. Descubra cómo puede ayudarle a desarrollar sus recursos personales.",
        category: "therapy",
        date: "2023-12-20",
        readTime: "10 min",
        image: "/blog-therapy-benefits.jpg",
      },
      {
        id: "relations-familiales",
        title: "Mejorar las relaciones familiares",
        excerpt:
          "Las dinámicas familiares pueden ser complejas. Aprenda a crear un ambiente familiar más armonioso y benevolente.",
        category: "relationships",
        date: "2023-12-15",
        readTime: "6 min",
        image: "/blog-family-relationships.jpg",
      },
    ],
  },
}

const categoryIcons = {
  mentalHealth: Brain,
  relationships: Users,
  therapy: Heart,
}

export default function BlogPage() {
  const [currentLang, setCurrentLang] = useState<"fr" | "es">("fr")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const t = content[currentLang]

  const filteredPosts =
    selectedCategory === "all" ? t.posts : t.posts.filter((post) => post.category === selectedCategory)

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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
        <div className="absolute inset-0 glass-effect" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.hero.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="liquid-transition"
            >
              {t.categories.all}
            </Button>
            <Button
              variant={selectedCategory === "mentalHealth" ? "default" : "outline"}
              onClick={() => setSelectedCategory("mentalHealth")}
              className="liquid-transition"
            >
              <Brain className="w-4 h-4 mr-2" />
              {t.categories.mentalHealth}
            </Button>
            <Button
              variant={selectedCategory === "relationships" ? "default" : "outline"}
              onClick={() => setSelectedCategory("relationships")}
              className="liquid-transition"
            >
              <Users className="w-4 h-4 mr-2" />
              {t.categories.relationships}
            </Button>
            <Button
              variant={selectedCategory === "therapy" ? "default" : "outline"}
              onClick={() => setSelectedCategory("therapy")}
              className="liquid-transition"
            >
              <Heart className="w-4 h-4 mr-2" />
              {t.categories.therapy}
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const CategoryIcon = categoryIcons[post.category as keyof typeof categoryIcons]

              return (
                <Card key={post.id} className="glass-card liquid-transition border-0 group hover:scale-105">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div
                      className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"
                      style={{
                        backgroundImage: `url('${post.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <CategoryIcon className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-foreground">
                          {t.categories[post.category as keyof typeof t.categories]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary liquid-transition">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium text-primary hover:text-primary/80 liquid-transition"
                      >
                        {t.readMore}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 liquid-transition" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-xl p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {currentLang === "fr" ? "Restez informé" : "Manténgase informado"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {currentLang === "fr"
                ? "Recevez nos derniers articles et conseils directement dans votre boîte mail"
                : "Reciba nuestros últimos artículos y consejos directamente en su correo"}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 liquid-transition text-lg px-8 py-3">
              {currentLang === "fr" ? "S'abonner à la newsletter" : "Suscribirse al boletín"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
