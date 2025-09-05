type Exp = { company: string; role: string; period: string; bullets: string[] }

export default function Experience() {
  const items: Exp[] = [
    {
      company: 'LegalZoom',
      role: 'Software Engineer',
      period: 'May 2024 – Aug 2024 · Mountain View, CA',
      bullets: [
        'Architected and deployed Spring Boot REST API endpoints, improving data accuracy and backend efficiency, and reducing customer support calls by over 15%.',
        'Collaborated with cross‑functional teams to integrate APIs into customer‑facing UI, refining database schemas and enhancing data reliability across thousands of transactions daily.',
      ],
    },
    {
      company: 'Pienomial',
      role: 'Software Engineer',
      period: 'Jun 2022 – Aug 2022 · Remote',
      bullets: [
        'Developed Merkle tree data structures in Go and Rust with MongoDB integration, enhancing backend security and integrity verification for distributed systems.',
        'Automated operational workflows with secure scripts, reducing manual maintenance effort by ~30%.',
      ],
    },
    {
      company: 'UC Berkeley - EECS',
      role: 'Data Structures Course Staff',
      period: 'Jan 2023 – May 2023 · Berkeley, CA',
      bullets: [
        'Supported 50+ students mastering core data structures and algorithms via 1:1 guidance and debugging, improving lab completion rates by ~25%.',
      ],
    },
    {
      company: 'University of California Police Department',
      role: 'Community Service Officer',
      period: 'Nov 2022 – Jun 2024 · Berkeley, CA',
      bullets: [
        'Engineered shift automation system in Apps Script, reducing scheduling time by ~30% and improving efficiency for 80+ department staff.',
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
                <div className="tl-role">{x.role}</div>
                <div className="tl-meta">{x.period}</div>
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
