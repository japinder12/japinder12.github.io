type Exp = { company: string; role: string; period: string; bullets: string[] }

export default function Experience() {
  const items: Exp[] = [
    {
      company: 'LegalZoom',
      role: 'Software Engineer',
      period: 'May 2024 – Aug 2024 · Mountain View, CA',
      bullets: [
        'Designed Spring Boot REST APIs to improve data capture accuracy and backend efficiency, reducing customer support calls.',
        'Collaborated with Compliance SDEs and PMs; integrated new APIs with frontend, refined DB schemas for reliable, user‑facing flows.',
      ],
    },
    {
      company: 'UC Berkeley · EECS',
      role: 'Data Structures Course Staff',
      period: 'Jan 2023 – May 2023 · Berkeley, CA',
      bullets: [
        'Guided students through lab assignments and core concepts, improving grasp of data structures and problem‑solving.',
      ],
    },
    {
      company: 'Pienomial',
      role: 'Software Engineer',
      period: 'Jun 2022 – Aug 2022 · Remote',
      bullets: [
        'Implemented Merkle trees in Go and Rust; built scripts to support secure backend workflows.',
      ],
    },
    {
      company: 'University of California Police Department',
      role: 'Community Service Officer',
      period: 'Nov 2022 – Jun 2024 · Berkeley, CA',
      bullets: [
        'Redesigned shift automation in Google Apps Script, cutting scheduling time ~30% for 80+ staff.',
      ],
    },
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
