import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal className="scroll-mt-24">
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
