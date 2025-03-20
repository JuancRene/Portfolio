"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Bot, ChevronRight, Database } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mi Experiencia</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un vistazo a mi trayectoria profesional y proyectos destacados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <ExperienceCard
            title="Sistema de Gestión Interna"
            period="2025"
            role="Desarrollador Full Stack"
            icon={<Database size={24} />}
            description="Diseño e implementación de un sistema empresarial integral para la gestión de ingresos, recursos humanos, clientes y pedidos. Arquitectura moderna con Next.js, TypeScript y Supabase que optimiza procesos críticos y proporciona gestión en tiempo real."
          />

          <ExperienceCard
            title="Reserva de Canchas de Paddle"
            period="2024"
            role="Desarrollador Full Stack"
            icon={<Calendar size={24} />}
            description="Desarrollo de aplicación web con Python y TypeScript para la gestión y reserva de canchas de paddle. Implementación de sistema de calendario para visualizar disponibilidad en tiempo real y gestión de usuarios con diferentes niveles de acceso."
          />

          <ExperienceCard
            title="Botsito - Bot de WhatsApp"
            period="2024 - 2025"
            role="Desarrollador Backend"
            icon={<Bot size={24} />}
            description="Desarrollo de un bot avanzado para WhatsApp con integración de GPT para conversaciones inteligentes y personalizadas. Implementación de funcionalidades para automatizar la programación de citas y reuniones, sincronizándolas con un calendario de forma eficiente."
          />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/experiencia"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Ver experiencia completa <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ title, period, role, icon, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all"
    >
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
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

