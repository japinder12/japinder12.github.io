type Edu = { school: string; degree: string; period?: string; details?: string[] }

export default function Education() {
  // Replace with your real entries
  const items: Edu[] = [
    { school: 'University of California, Berkeley', degree: 'B.S. Electrical Engineering and Computer Sciences', period: '2021 – 2025', details: [] },
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education-head">
          <span className="bar" aria-hidden />
          <h2>Education</h2>
        </div>
        <div className="timeline">
          {items.map((x, i) => (
            <div className="tl-item reveal" style={{ transitionDelay: `${80 + i * 80}ms` }} key={x.school + i}>
              <div className="tl-card">
                <div className="tl-company">{x.school}</div>
                <div className="tl-role">{x.degree}</div>
                {x.period && <div className="tl-meta">{x.period}</div>}
                {x.details && x.details.length > 0 && (
                  <ul className="tl-list">
                    {x.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

