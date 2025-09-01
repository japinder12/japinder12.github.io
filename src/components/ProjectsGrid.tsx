"use client"

import { useRef } from 'react'

type Project = { title: string; blurb: string; tag: string; href?: string }

const GH = (process.env.NEXT_PUBLIC_GITHUB_URL as string) || 'https://github.com/japinder12'
const projects: Project[] = [
  { title: 'k‑NN Geolocation (CLIP)', blurb: 'Predict image geolocations with CLIP embeddings + k‑NN; lowest MDE via tuned k.', tag: 'ML · PyTorch', href: 'google.com' },
  { title: 'LSTM Classical Music Generator', blurb: 'End‑to‑end MIDI pipeline with TensorFlow/Keras + music21; sequence model for composition.', tag: 'ML · TensorFlow', href: GH },
  { title: 'Encrypted File Sharing', blurb: 'Secure sharing in Go using RSA for auth and storage; spec‑driven design.', tag: 'Go · Security', href: GH },
  { title: 'CSO Scheduler', blurb: 'Automated data collection and shift assignment in Google Apps Script with custom matching.', tag: 'Apps Script', href: GH},
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
          <p style={{ color: 'var(--muted)', marginTop: 8 }}>Selected work across ML and full‑stack — from CLIP‑based geolocation to secure systems and workforce automation.</p>
        </div>
        <div className="projects-grid" style={{ marginTop: 18 }}>
          {projects.map((p) => <TiltCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}
