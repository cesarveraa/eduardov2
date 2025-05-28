"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Briefcase,
  Building2,
  Users,
  Award,
  ExternalLink,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  Send,
} from "lucide-react"
import Image from "next/image"

export default function EduardoPortfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/eduardo.prudencio.recacoechea/",
      handle: "@eduardo.prudencio.recacoechea",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://bo.linkedin.com/in/eduardoprudencio/es",
      handle: "Eduardo Prudencio Recacoechea",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/eduprureca",
      handle: "@eduprureca",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/eduardo.prudencio.recacoechea/",
      handle: "Eduardo Prudencio Recacoechea",
    },
  ]

  const experiences = [
    {
      company: "The Coca-Cola Company",
      role: "Experiencia en Marketing Estratégico",
      description: "Desarrollo de estrategias comerciales en una de las empresas más reconocidas globalmente.",
    },
    {
      company: "Petrobras",
      role: "Consultor Comercial",
      description: "Implementación de estrategias de marketing y desarrollo comercial en el sector energético.",
    },
    {
      company: "Samsung",
      role: "Especialista en Marketing",
      description: "Gestión de campañas y estrategias de posicionamiento de marca en tecnología.",
    },
  ]

  const currentProjects = [
    {
      name: "Prudencio Consultores",
      role: "Fundador y Gerente General",
      description:
        "Firma especializada en consultoría de negocios y marketing, ofreciendo asesoría a empresas en crecimiento y expansión.",
      icon: Building2,
    },
    {
      name: "Biancopuro Gelato",
      role: "Impulsor de Marca",
      description:
        "Desarrollo de esta marca de gelato artesanal italiano en Bolivia, con presencia en La Paz y Cochabamba.",
      icon: Award,
    },
    {
      name: "Fiorentini",
      role: "Asociado Comercial",
      description:
        "Promoción de productos italianos de snacks saludables, incluyendo legumbres crocantes y galletas bio.",
      icon: Users,
    },
  ]

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("proyectos-actuales")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-teal-50 via-white to-coral-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-teal-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full"></div>
              <span className="font-bold text-xl text-gray-800 dark:text-white">Eduardo Prudencio</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-teal-300 hover:bg-teal-50 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 hover:bg-teal-200 dark:hover:bg-teal-800">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Consultor Estratégico
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Eduardo Prudencio
                  <span className="block text-3xl lg:text-5xl text-teal-600 dark:text-teal-400">Recacoechea</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Consultor en Estrategia Comercial, Marketing y Franquicias con más de 20 años de experiencia en
                  empresas globales como The Coca-Cola Company, Petrobras y Samsung.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    window.open(
                      "https://wa.me/59172111600?text=Hola%20Eduardo,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios%20de%20consultoría.",
                      "_blank",
                    )
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-coral-400 text-coral-600 hover:bg-coral-50 dark:border-coral-500 dark:text-coral-400 dark:hover:bg-coral-950"
                  onClick={scrollToProjects}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Proyectos
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-80 h-80 mx-auto mb-4">
                  <Image
                    src="/images/eduardo-photo.jpg"
                    alt="Eduardo Prudencio Recacoechea"
                    fill
                    className="rounded-xl object-cover shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Eduardo Prudencio Recacoechea
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Consultor en Estrategia Comercial</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-coral-400 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experiencia Global</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Más de dos décadas desarrollando estrategias comerciales exitosas en empresas líderes mundiales
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.company}</h3>
                        <p className="text-teal-600 dark:text-teal-400 font-medium">{exp.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section id="proyectos-actuales" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos Actuales</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Liderando el crecimiento de marcas reconocidas y desarrollando nuevas oportunidades de negocio
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.name}</h3>
                        <p className="text-coral-600 dark:text-coral-400 font-medium">{project.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Showcase */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Marcas Representadas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Descubre las marcas internacionales que represento en Bolivia y explora sus productos únicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Biancopuro */}
              <div
                className="group cursor-pointer"
                onClick={() => window.open("https://biancopurogelato.com/", "_blank")}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-gray-700">
                  <CardContent className="p-8 text-center">
                    <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-xl">
                      <Image
                        src="/images/biancopuro-logo.jpg"
                        alt="Biancopuro - Gelato Artigianale Italiano"
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Biancopuro</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Gelato artesanal italiano auténtico. Sabores únicos y naturales que conquistan paladares en
                      Bolivia.
                    </p>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar Sitio Web
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Fiorentini */}
              <div
                className="group cursor-pointer"
                onClick={() => window.open("https://delivery.fiorentinispa.cl/", "_blank")}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-gray-700">
                  <CardContent className="p-8 text-center">
                    <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <Image
                        src="/images/fiorentini-logo.png"
                        alt="Fiorentini - Il Gusto Autentico"
                        width={240}
                        height={180}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Fiorentini</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Snacks saludables italianos. Legumbres crocantes y galletas bio que combinan sabor y bienestar.
                    </p>
                    <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar Sitio Web
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Inquiry Form */}
        <section className="bg-gradient-to-br from-teal-50 to-coral-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Quieres tu propia sucursal?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  ¿Quieres tu propia sucursal de Biancopuro o Fiorentini en Bolivia?
                </p>
              </div>

              <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder="+591 xxx-xxxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ciudad"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Ciudad de Interés *
                      </label>
                      <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="¿En qué ciudad te interesa abrir?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="marca"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Marca de Interés *
                      </label>
                      <select
                        id="marca"
                        name="marca"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Selecciona una marca</option>
                        <option value="biancopuro">Biancopuro - Gelato Artesanal</option>
                        <option value="fiorentini">Fiorentini - Snacks Saludables</option>
                        <option value="ambas">Ambas marcas</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Mensaje Adicional
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Cuéntanos más sobre tu interés en abrir una franquicia..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-coral-600 hover:from-teal-700 hover:to-coral-700 text-white py-3 text-lg"
                      onClick={(e) => {
                        e.preventDefault()
                        const form = e.target.closest("form")
                        const formData = new FormData(form)
                        const mensaje = `Hola Eduardo, me interesa abrir una franquicia:
                        
Nombre: ${formData.get("nombre")}
Teléfono: ${formData.get("telefono")}
Email: ${formData.get("email")}
Ciudad: ${formData.get("ciudad")}
Marca: ${formData.get("marca")}
Mensaje: ${formData.get("mensaje")}`

                        window.open(`https://wa.me/59172111600?text=${encodeURIComponent(mensaje)}`, "_blank")
                      }}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Consulta por WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Sígueme en Redes Sociales
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Mantente al día con contenido sobre marketing, ventas, franquicias y estrategia comercial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => {
                const getBrandColor = (name: string) => {
                  switch (name) {
                    case "Instagram":
                      return "from-pink-500 to-purple-600"
                    case "LinkedIn":
                      return "from-blue-600 to-blue-700"
                    case "Twitter":
                      return "from-blue-400 to-blue-500"
                    case "Facebook":
                      return "from-blue-600 to-blue-800"
                    default:
                      return "from-teal-500 to-coral-500"
                  }
                }

                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${getBrandColor(social.name)} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <social.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{social.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{social.handle}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-300 text-teal-600 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-950"
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Seguir
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full"></div>
                <span className="font-bold text-xl">Eduardo Prudencio Recacoechea</span>
              </div>
              <p className="text-gray-400 mb-4">Consultor en Estrategia Comercial, Marketing y Franquicias</p>
              <p className="text-gray-500 text-sm">
                © 2024 Eduardo Prudencio Recacoechea. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
