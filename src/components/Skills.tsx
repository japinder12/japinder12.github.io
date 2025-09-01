"use client"

import type { IconType } from 'react-icons'
import { FaJava } from 'react-icons/fa'
import {
  SiPython, SiGo, SiTypescript, SiJavascript, SiCplusplus, SiC, SiKotlin,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFastapi, SiSpring, SiRemix,
  SiPytorch, SiTensorflow, SiOpencv, SiPostgresql, SiMongodb,
  SiAmazonaws, SiGoogleappsscript,
} from 'react-icons/si'

type Skill = { label: string; icon?: IconType; cat?: 'web' | 'lang' | 'db' | 'cloud' | 'ml' }

export default function Skills() {
  const items: Skill[] = [
    // Languages
    { label: 'Python', icon: SiPython, cat: 'lang' },
    { label: 'Java', icon: FaJava as IconType, cat: 'lang' },
    { label: 'Go', icon: SiGo, cat: 'lang' },
    { label: 'TypeScript', icon: SiTypescript, cat: 'lang' },
    { label: 'JavaScript', icon: SiJavascript, cat: 'lang' },
    { label: 'C++', icon: SiCplusplus, cat: 'lang' },
    { label: 'C', icon: SiC, cat: 'lang' },
    { label: 'Kotlin', icon: SiKotlin, cat: 'lang' },
    // Web / Frameworks
    { label: 'React', icon: SiReact, cat: 'web' },
    { label: 'Next.js', icon: SiNextdotjs, cat: 'web' },
    { label: 'Tailwind CSS', icon: SiTailwindcss, cat: 'web' },
    { label: 'Node.js', icon: SiNodedotjs, cat: 'web' },
    { label: 'FastAPI', icon: SiFastapi, cat: 'web' },
    { label: 'Spring Boot', icon: SiSpring, cat: 'web' },
    { label: 'Remix', icon: SiRemix, cat: 'web' },
    // ML / DS
    { label: 'PyTorch', icon: SiPytorch, cat: 'ml' },
    { label: 'TensorFlow / Keras', icon: SiTensorflow, cat: 'ml' },
    { label: 'OpenCV', icon: SiOpencv, cat: 'ml' },
    { label: 'scikit‑learn', cat: 'ml' },
    // Data / Cloud
    { label: 'PostgreSQL', icon: SiPostgresql, cat: 'db' },
    { label: 'MongoDB', icon: SiMongodb, cat: 'db' },
    { label: 'SQL', cat: 'db' },
    { label: 'AWS', icon: SiAmazonaws, cat: 'cloud' },
    { label: 'Google Apps Script', icon: SiGoogleappscript, cat: 'cloud' },
  ]

  return (
    <section id="skills" className="section skills-sec">
      <div className="container">
        <div className="skills-head">
          <span className="bar" aria-hidden />
          <h2>Skills</h2>
        </div>
        <div className="skills-grid" style={{ marginTop: 18 }}>
          {items.map((s) => {
            const initials = s.label
              .split(/[^A-Za-z0-9]+/)
              .filter(Boolean)
              .map((w) => w[0])
              .slice(0, 2)
              .join('')
              .toUpperCase()
            const Icon = s.icon
            return (
              <div key={s.label} className={`skill-chip ${s.cat || ''}`}>
                <span className="icon">{Icon ? <Icon size={20} /> : <span className="ic-letter">{initials}</span>}</span>
                <span className="text">{s.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
