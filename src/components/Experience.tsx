type Exp = { company: string; role: string; period: string; bullets: string[] }

export default function Experience() {
  const items: Exp[] = [
    { company: 'Acme Co.', role: 'Frontend Engineer', period: '2024 — Present', bullets: ['Building delightful UIs with React + Next.js', 'Pushing performance + a11y improvements'] },
    { company: 'Widget Labs', role: 'Software Engineer', period: '2022 — 2024', bullets: ['Shipped design system + theme modes', 'Led micro‑interaction patterns across app'] },
    { company: 'Studio XYZ', role: 'Creative Developer', period: '2020 — 2022', bullets: ['Prototype motion concepts for landing pages', 'Canvas experiments + subtle parallax'] },
    { company: 'Freelance', role: 'Developer/Designer', period: '2018 — 2020', bullets: ['Delivered small sites end‑to‑end', 'Consulted on UX polish + animations'] },
  ]
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience-head">
          <span className="bar" aria-hidden />
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {items.map((x, i) => (
            <div className="tl-item reveal" style={{ transitionDelay: `${80 + i * 80}ms` }} key={x.company}>
              <div className="tl-card">
                <div className="tl-company">{x.company}</div>
                <div className="tl-role">{x.role} · <span className="tl-period">{x.period}</span></div>
                <ul className="tl-list">
                  {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
