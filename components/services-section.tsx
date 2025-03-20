"use client"

import { motion } from "framer-motion"
import { Code, Database, Layers, Globe, MessageSquare, Server } from "lucide-react"

export default function ServicesSection() {
  return (
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
            title="Desarrollo Frontend"
            description="Creación de interfaces modernas, responsivas y optimizadas para buscadores, utilizando React, Next.js y otras tecnologías de vanguardia."
          />

          <ServiceCard
            icon={<Server className="h-8 w-8" />}
            title="Desarrollo Backend"
            description="Implementación de APIs robustas, servicios web y lógica de negocio con Node.js, C# y Java para crear aplicaciones escalables y seguras."
          />

          <ServiceCard
            icon={<Database className="h-8 w-8" />}
            title="Bases de Datos"
            description="Diseño, implementación y optimización de bases de datos relacionales y NoSQL para garantizar un almacenamiento eficiente y seguro."
          />

          <ServiceCard
            icon={<Code className="h-8 w-8" />}
            title="Desarrollo en C#"
            description="Desarrollo de aplicaciones de escritorio y web utilizando C# y .NET Framework con enfoque en rendimiento y seguridad."
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
  )
}

function ServiceCard({ icon, title, description }) {
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

