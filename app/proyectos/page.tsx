import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Github, ExternalLink, Bot, Globe, Database, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Mis Proyectos
            </h1>

            <p className="text-gray-300 mb-12 text-lg max-w-3xl">
              Aquí encontrarás una selección de los proyectos en los que he trabajado. Cada uno representa un desafío
              único que me ha permitido aplicar y expandir mis conocimientos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ProjectCard
                title="Sistema de Gestión Interna"
                description="Sistema completo para control de ingresos, empleados, pedidos y clientes desarrollado para una empresa. Incluye gestión integral de recursos, reportes y seguimiento en tiempo real."
                image="/images/gestor-sistema.png"
                tags={["TypeScript", "Next.js", "MySQL", "Supabase", "Tailwind CSS"]}
                githubLink="https://github.com/JuancRene/GestorDePedido"
                icon={<Database size={24} />}
                year="2024"
              />

              <ProjectCard
                title="Botsito - Bot de WhatsApp"
                description="Bot avanzado para WhatsApp que utiliza GPT para ofrecer conversaciones inteligentes y personalizadas. Automatiza la programación de citas y reuniones, sincronizándolas con un calendario."
                image="/images/botsito.png"
                tags={["TypeScript", "Node.js", "WhatsApp API", "GPT", "ChatPDF"]}
                githubLink="https://github.com/JuancRene/Botsito"
                icon={<Bot size={24} />}
                year="2023-2024"
              />

              <ProjectCard
                title="Reserva de Canchas de Paddle"
                description="Aplicación web full-stack para la reserva de canchas de paddle. Permite a los usuarios ver disponibilidad, realizar reservas y gestionar sus horarios de forma intuitiva."
                image="/placeholder.svg?height=400&width=600"
                tags={["Python", "React", "TypeScript", "CSS", "CRUD"]}
                githubLink="https://github.com/JuancRene/TPcanchasPadle"
                icon={<Calendar size={24} />}
                year="2023"
              />

              <ProjectCard
                title="Portfolio Web Personal"
                description="Mi sitio web personal para mostrar mis habilidades y proyectos. Desarrollado con React y Tailwind CSS, presenta un diseño moderno y responsive."
                image="/placeholder.svg?height=400&width=600"
                tags={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
                githubLink="https://github.com/JuancRene"
                liveLink="https://juancrene.github.io"
                icon={<Globe size={24} />}
                year="2023"
              />
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Metodología de Trabajo</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Planificación</h3>
                  <p className="text-gray-300">
                    Análisis de requisitos, investigación y diseño de la arquitectura del proyecto.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Desarrollo</h3>
                  <p className="text-gray-300">
                    Implementación del código siguiendo buenas prácticas y patrones de diseño.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Pruebas y Despliegue</h3>
                  <p className="text-gray-300">
                    Testing exhaustivo y despliegue en entornos de producción con monitoreo continuo.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">
                  ¿Tienes un proyecto en mente? ¡Trabajemos juntos para hacerlo realidad!
                </p>
                <Link href="/contacto">
                  <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                    Contáctame
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({ title, description, image, tags, githubLink, liveLink, icon, year }) {
  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-emerald-400">
          {icon}
        </div>
        {year && (
          <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-black/70 text-xs font-medium text-emerald-400">
            {year}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-full bg-gray-800 text-xs font-medium text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={githubLink}
            target="_blank"
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={16} />
            Código
          </Link>

          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

