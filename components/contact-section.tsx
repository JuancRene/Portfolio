"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, MessageSquare, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendContactForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})
  const { showToast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormErrors({})

    try {
      const result = await sendContactForm(formData)

      if (result.success) {
        showToast({
          title: "Mensaje enviado",
          description: result.message,
          variant: "default",
        })
        // Limpiar el formulario
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setFormErrors(result.errors || {})
        showToast({
          title: "Error",
          description:
            result.message || "Hubo un error al enviar el mensaje. Por favor, revisa los campos e intenta nuevamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      showToast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctame</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form id="contact-form" action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-400">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                  formErrors.name ? "border-red-500" : "border-gray-700"
                } text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                placeholder="Tu nombre"
              />
              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name[0]}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                  formErrors.email ? "border-red-500" : "border-gray-700"
                } text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                placeholder="Tu email"
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email[0]}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="subject" className="text-sm text-gray-400">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                  formErrors.subject ? "border-red-500" : "border-gray-700"
                } text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                placeholder="Asunto del mensaje"
              />
              {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject[0]}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm text-gray-400">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                  formErrors.message ? "border-red-500" : "border-gray-700"
                } text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                placeholder="Tu mensaje"
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message[0]}</p>}
            </div>

            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
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
  )
}

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

