"use client"

import { useRef } from 'react'

type Project = { title: string; blurb: string; tag: string }

const projects: Project[] = [
  { title: 'Ambient Motion Landing', blurb: 'Hero gradients, scroll bound reveals, subtle parallax.', tag: 'Case Study' },
  { title: 'Data Viz Microsite', blurb: 'Canvas interactions and narrative scrollytelling.', tag: 'Selected' },
  { title: 'E-commerce UI Polish', blurb: 'Micro-interactions, a11y, and performance pass.', tag: 'Client' },
  { title: 'Experimental Nav Patterns', blurb: 'Magnetic hover, inertia, and spring transitions.', tag: 'Lab' },
  { title: 'Portfolio System', blurb: 'Design tokens, themes, and motion guidelines.', tag: 'System' },
  { title: '3D-ish Cards', blurb: 'Layered depth and tilt on hover.', tag: 'Experiment' },
]

function TiltCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const tx = (x - 0.5) * 10
    const ty = (0.5 - y) * 10
    el.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg) translateZ(0)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <article ref={ref} className="card" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* <span className="badge">{p.tag}</span> */}
      <h3>{p.title}</h3>
      <p>{p.blurb}</p>
    </article>
  )
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="reveal" style={{ transitionDelay: '60ms' }}>
          <div className="projects-head">
            <span className="bar" aria-hidden />
            <h2>Projects</h2>
          </div>
          <p style={{ color: 'var(--muted)', marginTop: 8 }}>A few selected projects that capture my approach to motion and UX polish.</p>
        </div>
        <div className="projects-grid" style={{ marginTop: 18 }}>
          {projects.map((p) => <TiltCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}
