export default function Nav() {
  return (
    <nav className="sticky">
      <div className="container bar">
        <a href="#top" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>Japinder</a>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

