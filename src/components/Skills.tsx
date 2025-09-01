import type { ReactNode } from 'react'

type Skill = { label: string; icon?: ReactNode; cat?: 'web' | 'lang' | 'db' | 'cloud' | 'ml' }

const Icons = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <circle cx="12" cy="12" r="2.2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
    </svg>
  ),
  Next: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.9 14.6L9.8 8h1.9l4.2 6.4v2.2Z"/>
    </svg>
  ),
  TS: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <rect x="3" y="4" width="18" height="16" rx="3"/>
      <path d="M8 9h8v2h-3v6h-2v-6H8V9Z" fill="#0b0b0c"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
      <path d="M4 12c2-4 4-6 8-6s6 2 8 6c-2 4-4 6-8 6s-6-2-8-6Z"/>
    </svg>
  ),
  Node: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"/>
    </svg>
  ),
  DB: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <ellipse cx="12" cy="6" rx="7" ry="3"/>
      <path d="M5 6v8c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="24" height="24">
      <path d="M12 3c2 3-2 3 0 6 2 3-2 3 0 6"/>
      <path d="M7 19c3 2 7 2 10 0M6 16h12"/>
    </svg>
  ),
  Cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="24" height="24">
      <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11-2A4 4 0 0 0 7 18Z"/>
    </svg>
  ),
  Lightning: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M13 2 4 14h6l-1 8 11-12h-6l-1-8Z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor" opacity="0.12"/>
      <path d="M8 9.5V8.5A2.5 2.5 0 0 1 10.5 6H13a2 2 0 0 1 2 2v2H10.5A2.5 2.5 0 0 0 8 12.5"/>
      <circle cx="12.2" cy="7.8" r="0.8" fill="currentColor"/>
      <path d="M16 14.5v1A2.5 2.5 0 0 1 13.5 18H11a2 2 0 0 1-2-2v-2h4.6A2.4 2.4 0 0 0 16 11.6"/>
      <circle cx="11.8" cy="16.2" r="0.8" fill="currentColor"/>
    </svg>
  ),
  Go: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 10h6M4 13h4M4 16h6"/>
      <path d="M14 9.5c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5S11.5 13.5 11.5 12 12.5 9.5 14 9.5Z"/>
      <path d="M19.5 9.5c.9 0 1.5.7 1.5 1.6v3.3"/>
    </svg>
  ),
  JS: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="4" opacity="0.18"/>
      <path d="M10.5 17.2V7.2h-2v8.7c0 1.5-.8 2.1-2 1.7v1.8c2.5.5 4-1 4-3.2Zm2.1.4c.6.8 1.6 1.2 2.9 1.2 2.1 0 3.4-1 3.4-2.6 0-1.3-.8-2.1-2.7-2.5l-.9-.2c-.9-.2-1.3-.5-1.3-1 0-.6.6-.9 1.4-.9.7 0 1.3.2 1.9.8l1.1-1.4c-.7-.8-1.8-1.2-3-1.2-2 0-3.3 1.1-3.3 2.6 0 1.3.8 2.1 2.6 2.5l.9.2c1 .2 1.4.5 1.4 1.1 0 .6-.6 1-1.6 1-1 0-1.8-.3-2.3-1l-1.2 1.4Z"/>
    </svg>
  ),
  Cpp: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="12" r="4.2"/>
      <path d="M16 10h3M16 14h3"/>
    </svg>
  ),
  C: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 8.8A6 6 0 1 0 16 15.2"/>
    </svg>
  ),
  Kotlin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M4 4h16L12 12l8 8H4V4Z" opacity="0.18"/>
      <path d="M4 4h8L4 12V4Z"/>
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/>
      <path d="M12 7v10M9 14h6"/>
    </svg>
  ),
  Spring: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M18 7c-2 6-8 9-12 8 2 3 9 4 13-1 2-3 2-6-1-7Z"/>
      <path d="M7 12c0-2 2-4 4-4"/>
    </svg>
  ),
  Remix: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M5 6h14v6H9a4 4 0 1 0 0 8h10v-3H9a1 1 0 0 1 0-2h10V6H5Z" opacity="0.9"/>
    </svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 5l2 2M12 5 7 10a7 7 0 1 0 10 0l-2 2"/>
      <circle cx="14.5" cy="7.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  TF: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M4 8 12 3l8 5-3 2-5-3-5 3-3-2Z"/>
      <path d="M11 12v9l-3-2v-7l3 0Zm2 0 3 0v7l-3 2v-9Z"/>
    </svg>
  ),
  OpenCV: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="7.5" cy="7.5" r="3.2"/>
      <circle cx="16.5" cy="7.5" r="3.2"/>
      <circle cx="12" cy="15.8" r="3.2"/>
    </svg>
  ),
  Sklearn: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="8" opacity="0.1"/>
      <text x="12" y="15" text-anchor="middle" font-size="10" font-weight="700">SL</text>
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="7" rx="7" ry="3"/>
      <path d="M5 7v8c0 1.66 3.13 3 7 3s7-1.34 7-3V7"/>
    </svg>
  ),
  Mongo: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 3s5 4 5 9-3 8-5 9c-2-1-5-4-5-9s5-9 5-9Z"/>
      <path d="M12 3v18"/>
    </svg>
  )
}

export default function Skills() {
  const items: Skill[] = [
    // Languages
    { label: 'Python', icon: Icons.Python, cat: 'lang' },
    { label: 'Java', icon: Icons.Java, cat: 'lang' },
    { label: 'Go', icon: Icons.Go, cat: 'lang' },
    { label: 'TypeScript', icon: Icons.TS, cat: 'lang' },
    { label: 'JavaScript', icon: Icons.JS, cat: 'lang' },
    { label: 'C++', icon: Icons.Cpp, cat: 'lang' },
    { label: 'C', icon: Icons.C, cat: 'lang' },
    { label: 'Kotlin', icon: Icons.Kotlin, cat: 'lang' },
    // Web / Frameworks
    { label: 'React', icon: Icons.React, cat: 'web' },
    { label: 'Next.js', icon: Icons.Next, cat: 'web' },
    { label: 'Tailwind CSS', icon: Icons.Tailwind, cat: 'web' },
    { label: 'Node.js', icon: Icons.Node, cat: 'web' },
    { label: 'FastAPI', icon: Icons.FastAPI, cat: 'web' },
    { label: 'Spring Boot', icon: Icons.Spring, cat: 'web' },
    { label: 'Remix', icon: Icons.Remix, cat: 'web' },
    // ML / DS
    { label: 'PyTorch', icon: Icons.PyTorch, cat: 'ml' },
    { label: 'TensorFlow / Keras', icon: Icons.TF, cat: 'ml' },
    { label: 'OpenCV', icon: Icons.OpenCV, cat: 'ml' },
    { label: 'scikit‑learn', icon: Icons.Sklearn, cat: 'ml' },
    // Data / Cloud
    { label: 'PostgreSQL', icon: Icons.DB, cat: 'db' },
    { label: 'MongoDB', icon: Icons.Mongo, cat: 'db' },
    { label: 'SQL', icon: Icons.SQL, cat: 'db' },
    { label: 'AWS', icon: Icons.Cloud, cat: 'cloud' },
    { label: 'Google Apps Script', cat: 'cloud' },
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
            return (
              <div key={s.label} className={`skill-chip ${s.cat || ''}`}>
                <span className="icon">{s.icon || <span className="ic-letter">{initials}</span>}</span>
                <span className="text">{s.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
