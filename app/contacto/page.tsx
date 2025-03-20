"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Github, Linkedin, MessageSquare, Mail, MapPin, Phone, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { sendContactForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormErrors({})

    try {
      const result = await sendContactForm(formData)

      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: result.message,
          variant: "default",
        })
        // Limpiar el formulario
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setFormErrors(result.errors || {})
        toast({
          title: "Error",
          description:
            result.message || "Hubo un error al enviar el mensaje. Por favor, revisa los campos e intenta nuevamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Contacto
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ContactCard icon={<Phone size={24} />} title="Teléfono" info="+543436238873" link="tel:+543436238873" />

              <ContactCard
                icon={<Mail size={24} />}
                title="Email"
                info="juancruzrenearenas@gmail.com"
                link="mailto:juancruzrenearenas@gmail.com"
              />

              <ContactCard icon={<MapPin size={24} />} title="Ubicación" info="Paraná, Entre Ríos, Argentina" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>

                <form id="contact-form" action={handleSubmit} className="space-y-6">
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

                  <div className="space-y-2">
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

                  <div className="space-y-2">
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
                </form>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Conéctate conmigo</h2>

                <p className="text-gray-300 mb-8">
                  Puedes encontrarme en las siguientes plataformas o contactarme directamente por WhatsApp o email.
                </p>

                <div className="space-y-4">
                  <SocialLink
                    icon={<Github size={20} />}
                    platform="GitHub"
                    username="JuancRene"
                    link="https://github.com/JuancRene"
                  />

                  <SocialLink
                    icon={<Linkedin size={20} />}
                    platform="LinkedIn"
                    username="Juan Cruz Rene Arenas"
                    link="https://www.linkedin.com/in/juan-cruz-rene-arenas-a1a690230/"
                  />

                  <SocialLink
                    icon={<MessageSquare size={20} />}
                    platform="WhatsApp"
                    username="+543436238873"
                    link="https://wa.me/543436238873"
                  />
                </div>

                <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <p className="text-emerald-400 text-sm">
                    Estoy disponible para proyectos freelance y oportunidades laborales. ¡No dudes en contactarme!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ContactCard({ icon, title, info, link }) {
  const content = (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all h-full flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{info}</p>
    </div>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}

function SocialLink({ icon, platform, username, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
    >
      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-300">{platform}</h3>
        <p className="text-emerald-400">{username}</p>
      </div>
    </Link>
  )
}

