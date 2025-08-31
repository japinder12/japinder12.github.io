export default function Footer() {
  return (
    <footer id="contact">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div>
          <div style={{ color: 'var(--muted)', fontSize: 12 }}>Let’s build something thoughtful</div>
          <div style={{ fontWeight: 600 }}>email@yourdomain.com</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a className="btn" href="https://github.com/japinder12" target="_blank" rel="noreferrer"><span className="pulse"/>GitHub</a>
          <a className="btn" href="https://linkedin.com/in/" target="_blank" rel="noreferrer"><span className="pulse"/>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

