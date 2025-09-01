"use client"

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav className={`sticky ${open ? 'menu-open' : ''}`}>
      <div className="container bar">
        <a href="#top" className="brand" onClick={close} style={{ fontWeight: 600, letterSpacing: '-0.01em', fontSize: 16 }}>
          Japinder's <span className="brand-portfolio">Portfolio</span>
        </a>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <span />
          <span />
          <span />
        </button>
        <div className="links" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={`${process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf'}`} target="_blank" rel="noreferrer" style={{ padding: '8px 12px', borderRadius: 10 }}>
            <span className="pulse" />Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile dropdown panel */}
      <div className="menu-panel" onClick={close}>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a className="btn" href={`${process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf'}`} target="_blank" rel="noreferrer" style={{ padding: '10px 12px', borderRadius: 10 }}>
          <span className="pulse" />Resume
        </a>
      </div>
    </nav>
  )
}
