import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectsGrid from '@/components/ProjectsGrid'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Skills />
      <Footer />
    </main>
  )
}
