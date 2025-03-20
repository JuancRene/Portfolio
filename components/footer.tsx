import Link from "next/link"
import { Github, Linkedin, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 md:mb-0"
          >
            &lt;JR&gt;
          </Link>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Juan Cruz Rene Arenas. Todos los derechos reservados.
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
            <Link href="https://wa.me/543436238873" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

