"use client"

import { useEffect, useRef } from 'react'

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
          <h1>
            Creative Developer crafting rich interactions
          </h1>
        </div>
        <p className="sub reveal" style={{ transitionDelay: '220ms' }}>
          I design and build delightful, performant web experiences — blending motion, polish, and crisp engineering.
        </p>
        <div className="tags reveal" style={{ transitionDelay: '320ms' }}>
          {['WebGL-ish vibes', 'GSAP-free micro-interactions', 'TypeScript', 'Next.js', 'Design systems'].map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        {/* CTA buttons intentionally removed per request */}
      </div>
    </section>
  )
}
