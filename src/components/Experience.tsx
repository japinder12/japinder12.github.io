export default function Experience() {
  const roles = [
    {
      company: 'Pickleball.com',
      title: 'Software Engineer',
      period: 'Jan 2024 – Present',
      bullets: [
        'Led frontend initiatives with React and Next.js.',
        'Planned technical approaches, code reviews, and performance tuning.',
      ],
    },
    {
      company: 'Atlantbh',
      title: 'Junior Software Engineer',
      period: 'Jun 2022 – Jan 2024',
      bullets: [
        'Built full‑stack features across React, PostgreSQL, Docker.',
        'Improved code quality via reviews and collaboration.',
      ],
    },
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 style={{ margin: 0, fontSize: '28px', letterSpacing: '-0.01em' }}>Experience</h2>
        <div style={{ marginTop: 12 }}>
          {roles.map((r) => (
            <div key={r.company} style={{ marginBottom: 18 }} className="reveal">
              <div style={{ fontWeight: 600 }}>{r.company}</div>
              <div style={{ color: 'var(--muted)', fontSize: 14 }}>{r.title} · {r.period}</div>
              <ul style={{ marginTop: 8 }}>
                {r.bullets.map((b, i) => <li key={i} style={{ color: 'var(--muted)' }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

