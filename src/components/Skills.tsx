type Skill = { label: string; icon?: React.ReactNode }

export default function Skills() {
  const items: Skill[] = [
    { label: 'React.js', icon: <span className="icon">⚛️</span> },
    { label: 'Next.js', icon: <span className="icon">N</span> },
    { label: 'TypeScript', icon: <span className="icon">TS</span> },
    { label: 'Tailwind', icon: <span className="icon">~</span> },
    { label: 'Node.js', icon: <span className="icon">🟢</span> },
    { label: 'PostgreSQL', icon: <span className="icon">🗄️</span> },
    { label: 'Java', icon: <span className="icon">☕</span> },
    { label: 'AWS', icon: <span className="icon">☁️</span> },
    { label: 'Socket.io', icon: <span className="icon">⚡</span> },
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
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
