"use client"

import { useRef } from 'react'

type Project = { title: string; blurb: string; tag: string; href?: string }

const GH = (process.env.NEXT_PUBLIC_GITHUB_URL as string) || 'https://github.com/japinder12'
const projects: Project[] = [
  { title: 'Ambient Motion Landing', blurb: 'Hero gradients, scroll bound reveals, subtle parallax.', tag: 'Case Study', href: GH },
  { title: 'Data Viz Microsite', blurb: 'Canvas interactions and narrative scrollytelling.', tag: 'Selected', href: GH },
  { title: 'E-commerce UI Polish', blurb: 'Micro-interactions, a11y, and performance pass.', tag: 'Client', href: GH },
  { title: 'Experimental Nav Patterns', blurb: 'Magnetic hover, inertia, and spring transitions.', tag: 'Lab', href: GH },
  { title: 'Portfolio System', blurb: 'Design tokens, themes, and motion guidelines.', tag: 'System', href: GH },
  { title: '3D-ish Cards', blurb: 'Layered depth and tilt on hover.', tag: 'Experiment', href: GH },
]

function TiltCard({ p }: { p: Project }) {
  const ref = useRef<HTMLAnchorElement | null>(null)

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
    <a ref={ref} className="card" onMouseMove={onMove} onMouseLeave={onLeave} href={p.href || GH} target="_blank" rel="noreferrer">
      {/* <span className="badge">{p.tag}</span> */}
      <h3>{p.title}</h3>
      <p>{p.blurb}</p>
    </a>
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
