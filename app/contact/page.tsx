"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { openSchedulingPopup } from "@/components/googleScheduler"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Calendar,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react"

const content = {
  fr: {
    hero: {
      title: "Contact",
      subtitle: "Prenons rendez-vous pour commencer votre parcours vers le mieux-être",
    },
    form: {
      title: "Envoyez-moi un message",
      subtitle: "Je vous répondrai dans les plus brefs délais",
      name: "Nom complet",
      email: "Adresse e-mail",
      phone: "Téléphone (optionnel)",
      subject: "Sujet",
      message: "Votre message",
      send: "Envoyer le message",
      success: "Message envoyé avec succès !",
      subjects: [
        "Consultation gratuite de 15 min",
        "Thérapie individuelle",
        "Thérapie de couple",
        "Formations/conférences",
        "Question générale",
      ],
    },
    contact: {
      title: "Informations de contact",
      address: {
        title: "Adresse du cabinet",
        line1: "Clinique Duluth ( 518 avenue Duluth E. Montréal )",
        line2: "",
      },
      phone: {
        title: "Téléphone",
        number: "+1 514-618-4390",
      },
      email: {
        title: "E-mail",
        address: "contact@jose-gastelu.com",
      },
      hours: {
        title: "Horaires d'ouverture",
        monday: "Lundi: 9h00 - 18h00",
        tuesday: "Mardi: 9h00 - 18h00",
        wednesday: "Mercredi: 9h00 - 18h00",
        thursday: "Jeudi: 9h00 - 18h00",
        friday: "Vendredi: 9h00 - 17h00",
        weekend: "Week-end: Fermé",
      },
    },
    whatsapp: {
      title: "Contact rapide",
      subtitle: "Contactez-moi directement sur WhatsApp",
      button: "Écrire sur WhatsApp",
    },
    appointment: {
      title: "Réserver un rendez-vous",
      subtitle: "Consultation gratuite de 15 minutes disponible",
      button: "Prendre rendez-vous",
    },
  },
  es: {
    hero: {
      title: "Contacto",
      subtitle: "Concertemos una cita para comenzar su camino hacia el bienestar",
    },
    form: {
      title: "Envíeme un mensaje",
      subtitle: "Le responderé lo antes posible",
      name: "Nombre completo",
      email: "Dirección de correo electrónico",
      phone: "Teléfono (opcional)",
      subject: "Asunto",
      message: "Su mensaje",
      send: "Enviar mensaje",
      success: "¡Mensaje enviado con éxito!",
      subjects: [
        "Consulta gratuita de 15 min",
        "Terapia individual",
        "Terapia de pareja",
        "Formaciones/conferencias",
        "Pregunta general",
      ],
    },
    contact: {
      title: "Información de contacto",
      address: {
        title: "Dirección del consultorio",
        line1: "Clinique Duluth ( 518 avenue Duluth E. Montréal )",
        line2: "",
      },
      phone: {
        title: "Teléfono",
        number: "+1 514-618-4390",
      },
      email: {
        title: "Correo electrónico",
        address: "contact@jose-gastelu.com",
      },
      hours: {
        title: "Horarios de atención",
        monday: "Lunes: 9h00 - 18h00",
        tuesday: "Martes: 9h00 - 18h00",
        wednesday: "Miércoles: 9h00 - 18h00",
        thursday: "Jueves: 9h00 - 18h00",
        friday: "Viernes: 9h00 - 17h00",
        weekend: "Fin de semana: Cerrado",
      },
    },
    whatsapp: {
      title: "Contacto rápido",
      subtitle: "Contácteme directamente por WhatsApp",
      button: "Escribir en WhatsApp",
    },
    appointment: {
      title: "Reservar una cita",
      subtitle: "Consulta gratuita de 15 minutos disponible",
      button: "Hacer una cita",
    },
  },
  en: {
    hero: {
      title: "Contact",
      subtitle: "Let’s schedule an appointment to start your well‑being journey",
    },
    form: {
      title: "Send me a message",
      subtitle: "I’ll get back to you as soon as possible",
      name: "Full name",
      email: "Email address",
      phone: "Phone (optional)",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      success: "Message sent successfully!",
      subjects: [
        "Free 15‑min consultation",
        "Individual therapy",
        "Couples therapy",
        "Workshops/keynotes",
        "General question",
      ],
    },
    contact: {
      title: "Contact information",
      address: {
        title: "Office address",
        line1: "Clinique Duluth ( 518 avenue Duluth E. Montréal )",
        line2: "",
      },
      phone: { title: "Phone", number: "+1 514-618-4390" },
      email: { title: "Email", address: "contact@jose-gastelu.com" },
      hours: {
        title: "Opening hours",
        monday: "Monday: 9:00 a.m. – 6:00 p.m.",
        tuesday: "Tuesday: 9:00 a.m. – 6:00 p.m.",
        wednesday: "Wednesday: 9:00 a.m. – 6:00 p.m.",
        thursday: "Thursday: 9:00 a.m. – 6:00 p.m.",
        friday: "Friday: 9:00 a.m. – 5:00 p.m.",
        weekend: "Weekend: Closed",
      },
    },
    whatsapp: {
      title: "Quick contact",
      subtitle: "Message me directly on WhatsApp",
      button: "Write on WhatsApp",
    },
    appointment: {
      title: "Book an appointment",
      subtitle: "Free 15‑minute consultation available",
      button: "Book now",
    },
  },
}

export default function ContactPage() {
  const [currentLang, setCurrentLang] = useState<"fr" | "es" | "en">("fr")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = content[currentLang]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const whatsappMessage = encodeURIComponent(
    currentLang === "fr"
      ? "Bonjour José, je souhaiterais prendre rendez-vous pour une consultation."
      : currentLang === "es"
      ? "Hola José, me gustaría hacer una cita para una consulta."
      : "Hello José, I’d like to book an appointment for a consultation.",
  )

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

      {/* Quick Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp Contact */}
            <Card className="glass-card border-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{t.whatsapp.title}</h3>
                <p className="text-muted-foreground mb-4">{t.whatsapp.subtitle}</p>
                <Button
                  className="bg-green-600 hover:bg-green-700 liquid-transition"
                  onClick={() => window.open(`https://wa.me/15146184390?text=${whatsappMessage}`, "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.whatsapp.button}
                </Button>
              </CardContent>
            </Card>

            {/* Appointment Booking */}
            <Card className="glass-card border-0 bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{t.appointment.title}</h3>
                <p className="text-muted-foreground mb-4">{t.appointment.subtitle}</p>
                <Button className="bg-primary hover:bg-primary/90 liquid-transition" onClick={() => openSchedulingPopup()}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.appointment.button}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.form.title}</h2>
                  <p className="text-muted-foreground mb-8">{t.form.subtitle}</p>

                  {isSubmitted && (
                    <div className="flex items-center space-x-2 bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                      <CheckCircle className="w-5 h-5" />
                      <span>{t.form.success}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        {t.form.name}
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="glass-input"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        {t.form.email}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="glass-input"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        {t.form.phone}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="glass-input"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        {t.form.subject}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        className="w-full p-3 border border-border rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 liquid-transition"
                      >
                        <option value="">{t.form.subject}</option>
                        {t.form.subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t.form.message}</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={5}
                        className="glass-input resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 liquid-transition">
                      <Send className="w-4 h-4 mr-2" />
                      {t.form.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-8">{t.contact.title}</h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.address.title}</h3>
                        <p className="text-muted-foreground">{t.contact.address.line1}</p>
                        <p className="text-muted-foreground">{t.contact.address.line2}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.phone.title}</h3>
                        <a
                          href={`tel:${t.contact.phone.number}`}
                          className="text-muted-foreground hover:text-primary liquid-transition"
                        >
                          {t.contact.phone.number}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.email.title}</h3>
                        <a
                          href={`mailto:${t.contact.email.address}`}
                          className="text-muted-foreground hover:text-primary liquid-transition"
                        >
                          {t.contact.email.address}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">{t.contact.hours.title}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>{t.contact.hours.monday}</p>
                          <p>{t.contact.hours.tuesday}</p>
                          <p>{t.contact.hours.wednesday}</p>
                          <p>{t.contact.hours.thursday}</p>
                          <p>{t.contact.hours.friday}</p>
                          <p className="font-medium">{t.contact.hours.weekend}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="glass-card border-0">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-foreground font-medium">
                        {currentLang === "fr" ? "Carte interactive" : currentLang === "es" ? "Mapa interactivo" : "Interactive map"}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {currentLang === "fr"
                          ? "Intégration Google Maps à venir"
                          : currentLang === "es"
                          ? "Integración de Google Maps próximamente"
                          : "Google Maps integration coming soon"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card border-0 bg-red-50/80">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                {currentLang === "fr" ? "Urgence santé mentale" : currentLang === "es" ? "Emergencia de salud mental" : "Mental health emergency"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {currentLang === "fr"
                  ? "Si vous traversez une crise ou avez des pensées suicidaires, contactez immédiatement :"
                  : currentLang === "es"
                  ? "Si atraviesa una crisis o tiene pensamientos suicidas, contacte inmediatamente:"
                  : "If you are in crisis or having suicidal thoughts, contact immediately:"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700 liquid-transition">
                  <a href="tel:911">
                    <Phone className="w-4 h-4 mr-2" />
                    {currentLang === "fr"
                      ? "Services généraux d’urgence : 911"
                      : currentLang === "es"
                      ? "Servicios generales de emergencia: 911"
                      : "General emergency services: 911"}
                  </a>
                </Button>
                <Button asChild className="bg-red-600 text-white hover:bg-red-700 liquid-transition">
                  <a href="tel:+18662773553">
                    <Phone className="w-4 h-4 mr-2" />
                    {currentLang === "fr"
                      ? "Centre de crise et de prévention du suicide : 1-866-277-3553"
                      : currentLang === "es"
                      ? "Centro de crisis y prevención del suicidio: 1-866-277-3553"
                      : "Crisis and suicide prevention center: 1-866-277-3553"}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
