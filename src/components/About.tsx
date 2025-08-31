export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container cols">
        <div>
          <h2 style={{ marginTop: 0, marginBottom: 12, fontSize: '28px', letterSpacing: '-0.01em' }}>About</h2>
          <p style={{ color: 'var(--muted)' }}>
            I enjoy building expressive interfaces — the kind that feel alive without getting in the user’s way. My toolkit spans design systems, TypeScript, and motion design. When useful, I’ll dip into Canvas and shaders; when not, I lean on clean CSS and measured interactions.
          </p>
          <div className="kpi">
            <div className="tile"><div className="num">8+ yrs</div><div className="lbl">Experience</div></div>
            <div className="tile"><div className="num">25+</div><div className="lbl">Projects</div></div>
            <div className="tile"><div className="num">90+</div><div className="lbl">Lighthouse Perf</div></div>
          </div>
        </div>
        <div>
          <div className="card" style={{ height: 220, display: 'grid', placeItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 14, color: 'var(--muted)' }}>Currently</div>
              <div style={{ fontSize: 18, fontWeight: 600 }}>Available for select collaborations</div>
              <a className="btn" href="#contact" style={{ marginTop: 12, display: 'inline-flex' }}>
                <span className="pulse"/>Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

