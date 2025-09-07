type Edu = { school: string; degree: string; period?: string }

export default function Education() {
  // Replace with your real entry
  const edu: Edu = {
    school: 'University of California, Berkeley',
    degree: 'B.S. Electrical Engineering and Computer Sciences',
    period: '2021 – 2025',
  }

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education-head">
          <span className="bar" aria-hidden />
          <h2>Education</h2>
        </div>
        <div className="edu-card reveal" style={{ transitionDelay: '80ms' }}>
          <div className="edu-icon" aria-hidden>🎓</div>
          <div className="edu-text">
            <div className="edu-school">{edu.school}</div>
            <div className="edu-degree">{edu.degree}</div>
          </div>
          {edu.period && <div className="edu-meta right">{edu.period}</div>}
        </div>
      </div>
    </section>
  )
}
