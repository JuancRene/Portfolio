import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

