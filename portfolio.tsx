"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  BarChart3,
  Layers,
  Globe,
  ChevronRight,
  Github,
  Linkedin,
  MessageSquare,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="#inicio"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
          >
            &lt;JR&gt;
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["inicio", "sobre-mi", "servicios", "conocimientos"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider hover:text-emerald-400 transition-colors ${activeSection === item ? "text-emerald-400 font-medium" : "text-gray-300"}`}
              >
                {item.replace("-", " ")}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["inicio", "sobre-mi", "servicios", "conocimientos"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`text-sm uppercase tracking-wider py-2 ${activeSection === item ? "text-emerald-400 font-medium" : "text-gray-300"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.replace("-", " ")}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity w-full text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-emerald-400 text-lg md:text-xl font-medium mb-4">¡BIENVENIDO!</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Juan Cruz Rene
              </span>
              ,
              <br />
              Desarrollador de Software
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Especializado en desarrollo web, bases de datos y análisis de datos. Creando soluciones digitales con
              pasión y precisión.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#servicios"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center"
              >
                Ver mis servicios <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#sobre-mi"
                className="px-6 py-3 rounded-full border border-gray-700 text-white font-medium hover:border-emerald-500 transition-all"
              >
                Conoce más sobre mí
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-2/5"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 blur-xl opacity-20"></div>
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50"></div>
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-emerald-500/20">
                  <Image src="/placeholder.svg" alt="Juan Cruz Rene" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-3/5"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hola, Soy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Juan Cruz Rene
                </span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  ¡Hola! Soy Juan, actualmente resido en la ciudad de Paraná, Entre Ríos, Argentina. Curso el segundo
                  año de la tecnicatura en programación en UTN.
                </p>
                <p>
                  Tengo conocimientos en HTML, CSS, JavaScript, C#, NodeJS, bases de datos y análisis de datos, también
                  estoy aprendiendo Java y Python.
                </p>
                <p>
                  Estoy en busca de nuevas experiencias y oportunidades para aplicar mis habilidades e impulsar mi
                  carrera como desarrollador de Software.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["HTML5", "CSS3", "JavaScript", "C#", "NodeJS", "SQL", "Python", "Java"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Servicios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ofrezco soluciones digitales adaptadas a tus necesidades, con un enfoque en calidad y resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe className="h-8 w-8" />}
              title="Desarrollo de Sitios Web"
              description="Creación de sitios web modernos, responsivos y optimizados para buscadores, utilizando las últimas tecnologías."
            />

            <ServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Desarrollo en C#"
              description="Desarrollo de aplicaciones de escritorio y web utilizando C# y .NET Framework con enfoque en rendimiento y seguridad."
            />

            <ServiceCard
              icon={<Database className="h-8 w-8" />}
              title="Bases de Datos"
              description="Diseño, implementación y optimización de bases de datos relacionales y NoSQL para garantizar un almacenamiento eficiente."
            />

            <ServiceCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Data Analytics"
              description="Análisis de datos para obtener insights valiosos que ayuden a tomar decisiones informadas y estratégicas."
            />

            <ServiceCard
              icon={<Layers className="h-8 w-8" />}
              title="Frameworks y APIs"
              description="Desarrollo con frameworks modernos y creación de APIs RESTful para integración de sistemas y aplicaciones."
            />

            <ServiceCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Consultoría Técnica"
              description="Asesoramiento técnico para proyectos de software, evaluación de tecnologías y mejores prácticas de desarrollo."
            />
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="conocimientos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conocimientos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estas son las tecnologías y herramientas con las que trabajo para crear soluciones efectivas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HTML", level: 99 },
              { name: "CSS", level: 99 },
              { name: "JavaScript", level: 70 },
              { name: "C#", level: 99 },
              { name: "SQL", level: 99 },
              { name: "Node.js", level: 65 },
              { name: "Python", level: 80 },
              { name: "Java", level: 99 },
              { name: "React", level: 80 },
              { name: "TypeScript", level: 70 },
              { name: "Node.js", level: 55 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-all"
              >
                <h3 className="text-lg font-medium mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-right text-sm text-gray-400">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctame</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Tu email"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>

            <div className="mt-12 flex justify-center space-x-6">
              <SocialLink icon={<Github className="h-5 w-5" />} label="GitHub" href="https://github.com/JuancRene" />
              <SocialLink
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/juan-cruz-rene-arenas-a1a690230/"
              />
              <SocialLink
                icon={<MessageSquare className="h-5 w-5" />}
                label="WhatsApp"
                href="https://wa.me/543436238873"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">O contáctame directamente:</p>
              <a
                href="mailto:juancruzrenearenas@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                juancruzrenearenas@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link
              href="#inicio"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 md:mb-0"
            >
              &lt;JR&gt;
            </Link>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Juan Cruz Rene. Todos los derechos reservados.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://github.com/JuancRene"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/juan-cruz-rene-arenas-a1a690230/"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Service Card Component
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all group"
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-cyan-500 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

// Social Link Component
function SocialLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 hover:text-white transition-all"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

