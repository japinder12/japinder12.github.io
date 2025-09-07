import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectsGrid from '@/components/ProjectsGrid'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
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
      <Education />
      <Footer />
    </main>
  )
}
