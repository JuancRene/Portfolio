import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, Code, Users, Bot, ChevronRight, Database, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Mi Experiencia
            </h1>

            <div className="space-y-12 mb-16">
              <ExperienceCard
                title="Coding Giants España"
                period="2024 - Presente"
                role="Profesor"
                icon={<Users size={24} />}
                description="Enseñanza de programación a niños y jóvenes:"
                tasks={[
                  "Profesor de Python para niños de 12 a 16 años",
                  "Profesor de C# para niños de 12 a 16 años",
                  "Profesor de Scratch para niños de 7 a 12 años",
                ]}
              />

              <ExperienceCard
                title="Sistema de Gestión Interna"
                period="2025"
                role="Desarrollador Full Stack"
                icon={<Database size={24} />}
                description="Diseño e implementación de un sistema integral para optimización de procesos empresariales:"
                tasks={[
                  "Desarrollo de módulos interconectados para gestión financiera y seguimiento de ingresos en tiempo real",
                  "Implementación de sistema de administración de recursos humanos con gestión de perfiles, roles y permisos",
                  "Creación de plataforma CRM para seguimiento de clientes y gestión de relaciones comerciales",
                  "Diseño de sistema de tracking de pedidos con notificaciones automáticas y reportes personalizados",
                  "Arquitectura full-stack con Next.js y TypeScript para el frontend y Supabase/MySQL para persistencia de datos",
                ]}
                link="https://github.com/JuancRene/GestorDePedido"
                demoLink="https://gestor-de-pedido-lapecosa.vercel.app"
              />

              <ExperienceCard
                title="Reserva de Canchas de Paddle"
                period="2024"
                role="Desarrollador Full Stack"
                icon={<Calendar size={24} />}
                description="Desarrollo de aplicación web para la gestión y reserva de canchas de paddle:"
                tasks={[
                  "Diseño e implementación de backend en Python para gestionar la lógica de negocio y reservas",
                  "Desarrollo de frontend con React y TypeScript para una experiencia de usuario intuitiva",
                  "Implementación de operaciones CRUD completas para la gestión de reservas, canchas y usuarios",
                  "Creación de sistema de autenticación y gestión de usuarios con diferentes niveles de acceso",
                  "Diseño de interfaz con modo oscuro para mejorar la experiencia visual de los usuarios",
                ]}
                link="https://github.com/JuancRene/TPcanchasPadle"
              />

              <ExperienceCard
                title="Botsito - Bot de WhatsApp"
                period="2024 - 2023"
                role="Desarrollador Backend"
                icon={<Bot size={24} />}
                description="Creación de solución automatizada para interacción con clientes a través de WhatsApp:"
                tasks={[
                  "Desarrollo de un bot avanzado con integración de GPT para ofrecer conversaciones fluidas y humanas",
                  "Implementación de sistema de programación automática de reuniones y citas sincronizadas con calendario",
                  "Integración con ChatPDF para personalizar las respuestas del bot mediante la carga de archivos PDF",
                  "Arquitectura escalable en TypeScript con manejo eficiente de estados conversacionales",
                  "Implementación de sistema de respuestas contextuales para mejorar la experiencia del usuario",
                ]}
                link="https://github.com/JuancRene/Botsito"
              />

              <ExperienceCard
                title="Portfolio Web Personal"
                period="2023"
                role="Desarrollador Web Jr"
                icon={<Code size={24} />}
                description="Diseño y desarrollo de plataforma personal de presentación profesional:"
                tasks={[
                  "Conceptualización y diseño UX/UI centrado en la experiencia de usuario y accesibilidad",
                  "Implementación frontend con enfoque mobile-first y técnicas avanzadas de CSS",
                  "Optimización de rendimiento web siguiendo las mejores prácticas de Core Web Vitals",
                  "Integración de animaciones y transiciones fluidas para mejorar el engagement",
                  "Despliegue y configuración en GitHub Pages con integración continua",
                ]}
                link="https://github.com/JuancRene"
              />
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Habilidades Adquiridas</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Desarrollo Web</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Arquitectura de interfaces modernas con React y Next.js implementando Server Components y Client
                        Components
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Optimización avanzada de rendimiento, SEO y Core Web Vitals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Integración de sistemas de autenticación y autorización con proveedores OAuth</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Desarrollo Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Diseño e implementación de APIs RESTful siguiendo principios SOLID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Modelado de bases de datos relacionales con optimización de consultas y rendimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Implementación de sistemas de caché, middleware de seguridad y validación de datos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Enseñanza</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Preparación de material didáctico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Adaptación de contenido según nivel y edad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Evaluación de progreso y retroalimentación</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Desarrollo de Software</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Aplicación de patrones de diseño y arquitecturas limpias en proyectos complejos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Gestión de versiones con Git, implementación de flujos de trabajo colaborativos y CI/CD
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Desarrollo ágil con metodologías Scrum y Kanban, estimación de tareas y gestión de sprints
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/proyectos">
                  <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                    Ver mis proyectos <ChevronRight className="ml-2 h-4 w-4" />
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

function ExperienceCard({ title, period, role, icon, description, tasks, link, demoLink }) {
  return (
    <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center text-emerald-400 mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-gray-400 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{period}</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
            {role}
          </div>
        </div>

        <div className="md:w-3/4">
          <p className="text-gray-300 mb-4">{description}</p>
          <ul className="space-y-2 mb-6">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            {link && (
              <Link
                href={link}
                target="_blank"
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center"
              >
                <Github size={16} className="mr-1" /> Ver código
              </Link>
            )}

            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center"
              >
                <ExternalLink size={16} className="mr-1" /> Ver demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

