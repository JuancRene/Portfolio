"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { name: "HTML", level: 99 },
    { name: "CSS", level: 99 },
    { name: "C#", level: 99 },
    { name: "SQL", level: 99 },
    { name: "Java", level: 99 },
    { name: "React", level: 80 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 55 },
  ].sort((a, b) => b.level - a.level)

  return (
    <section id="conocimientos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conocimientos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estas son las tecnologías y herramientas con las que trabajo para crear soluciones efectivas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
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
  )
}

