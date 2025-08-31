import type { ReactNode } from 'react'

type Skill = { label: string; icon?: ReactNode }

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
  )
}

export default function Skills() {
  const items: Skill[] = [
    { label: 'React.js', icon: Icons.React },
    { label: 'Next.js', icon: Icons.Next },
    { label: 'TypeScript', icon: Icons.TS },
    { label: 'Tailwind', icon: Icons.Tailwind },
    { label: 'Node.js', icon: Icons.Node },
    { label: 'PostgreSQL', icon: Icons.DB },
    { label: 'Java', icon: Icons.Java },
    { label: 'AWS', icon: Icons.Cloud },
    { label: 'Socket.io', icon: Icons.Lightning },
  ]
  return (
    <section id="skills" className="section skills-sec">
      <div className="container">
        <div className="skills-head">
          <span className="bar" aria-hidden />
          <h2>Skills</h2>
        </div>
        <div className="skills-grid" style={{ marginTop: 18 }}>
          {items.map((s) => (
            <div key={s.label} className="skill-card">
              <div className={`skill-icon ${
                s.label.startsWith('React') ? 'react' :
                s.label.startsWith('Next') ? 'next' :
                s.label.startsWith('TypeScript') ? 'ts' :
                s.label.startsWith('Tailwind') ? 'tailwind' :
                s.label.startsWith('Node') ? 'node' :
                s.label.startsWith('Postgre') ? 'db' :
                s.label.startsWith('Java') ? 'java' :
                s.label.startsWith('AWS') ? 'cloud' :
                'lightning'
              }`}>{s.icon}</div>
              <div className="skill-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
