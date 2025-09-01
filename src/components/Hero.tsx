"use client"

import { useEffect, useRef, useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'

const monoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500','600','700'] })

export default function Hero() {
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    const onEnter = () => { glow.style.opacity = '1' }
    const onLeave = () => { glow.style.opacity = '0' }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  useEffect(() => {
    // Intersection-based reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add('in')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Removed "Click Me" overlay behavior tied to project cards

  // Typewriter effect for the main headline (with caret)
  const fullTitle = 'Shipping clean APIs and crisp UIs'
  const [title, setTitle] = useState<string>('')
  const [showCaret, setShowCaret] = useState(true)
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTitle(fullTitle.slice(0, i))
      if (i >= fullTitle.length) clearInterval(interval)
    }, 70)
    const caretBlink = setInterval(() => setShowCaret((v) => !v), 500)
    return () => { clearInterval(interval); clearInterval(caretBlink) }
  }, [])

  return (
    <section id="top" className="hero section">
      <div aria-hidden className="bg-stage">
        <div className="blob violet a" style={{ left: '-10%', top: '-10%' }} />
        <div className="blob cyan b" style={{ right: '-10%', top: '10%' }} />
        <div className="blob amber c" style={{ left: '10%', bottom: '-10%' }} />
      </div>
      <div ref={glowRef} className="cursor-glow" />

      <div className="container">
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <h1 className={`${monoFont.className} typewriter`} aria-label={fullTitle}>
            {title}
            <span aria-hidden className={`caret${showCaret ? ' on' : ''}`} />
          </h1>
        </div>

        <div className="tags reveal" style={{ transitionDelay: '320ms' }}>
          {['Software Engineer', 'Fullstack Developer', 'Backend Engineer', 'Trying to build cool things'].map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <p className="sub reveal" style={{ transitionDelay: '220ms' }}>
          Building reliable systems with clean APIs, fast UIs, and measurable outcomes
        </p>
        {/* CTA buttons intentionally removed per request */}
      </div>
    </section>
  )
}
