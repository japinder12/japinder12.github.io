"use client"

import { useRef } from 'react'

type Project = { title: string; blurb: string; tag: string; href?: string; icon?: string; effect?: 'music' | 'compass' | 'filefly' | 'clockfloat' | 'pintrip' | string }

const GH = (process.env.NEXT_PUBLIC_GITHUB_URL as string) || 'https://github.com/japinder12'
const projects: Project[] = [
  { title: 'k‑NN Geolocation (CLIP)', blurb: 'Image geolocation via CLIP embeddings + k‑NN; grid‑searched k and PCA analysis delivered the lowest MDE in my experiments.', tag: 'ML · PyTorch', href: GH, icon: '🧭', effect: 'compass' },
  { title: 'LSTM Classical Music Generator', blurb: 'Symbolic‑music LSTM that generates multi‑bar classical‑style phrases; end‑to‑end MIDI pipeline from parsing → training → synthesis.', tag: 'ML · TensorFlow', href: GH+'/resumes', icon: '🎼', effect: 'music' },
  { title: 'Encrypted File Sharing', blurb: 'RSA‑based file sharing with explicit trust boundaries — typed, spec‑driven design for auth, sharing, and storage.', tag: 'Go · Security', href: GH, icon: '🔐', effect: 'filefly' },
  { title: 'CSO Scheduler', blurb: 'Constraint‑aware matching automates data collection and shift assignments, improving scheduling accuracy and reducing manual overhead.', tag: 'Apps Script', href: GH, icon: '🗓️', effect: 'clockfloat' },
  { title: 'Toronto Safety', blurb: 'Leaflet + Next.js dashboard to explore Toronto Police Service MCI near any address; postal‑code search, time and radius filters, and colour legend.', tag: 'Next.js · Leaflet', href: 'https://github.com/japinder12/toronto-safety', icon: '🗺️', effect: 'pintrip' },
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
    <div ref={ref} className="card" onMouseMove={onMove} onMouseLeave={onLeave}>
      <a className="ext-link" aria-label={`Open ${p.title}`} href={p.href || GH} target="_blank" rel="noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M14 5h5v5M9 15l10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M20 14v5a1 1 0 0 1-1 1h-5M10 4H5a1 1 0 0 0-1 1v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </a>
      <div className="card-head">
        <span className={`picon ${p.effect || ''}`} aria-hidden>
          <span className="emoji">{p.icon || '📦'}</span>
          {p.effect === 'music' && (
            <>
              <span className="spark n1">🎵</span>
              <span className="spark n2">🎶</span>
            </>
          )}
          {p.effect === 'clockfloat' && (
            <>
              <span className="spark n1">⏰</span>
              <span className="spark n2">🕒</span>
            </>
          )}
          {p.effect === 'filefly' && (
            <>
              <span className="key-emoji small">🔑</span>
              <span className="fly">📁</span>
              <span className="flash" />
            </>
          )}
          {p.effect === 'pintrip' && (
            <span className="pin">📍</span>
          )}
        </span>
        <h3>{p.title}</h3>
      </div>
      <p>{p.blurb}</p>
    </div>
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
