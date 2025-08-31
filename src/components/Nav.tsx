import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav className="sticky">
      <div className="container bar">
        <a href="#top" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>Japinder</a>
        <div className="links" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={`${process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf'}`} target="_blank" rel="noreferrer" style={{ padding: '8px 12px', borderRadius: 10 }}>
            <span className="pulse" />Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
