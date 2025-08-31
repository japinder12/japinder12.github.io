"use client"

import React from 'react'

export default function Footer() {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = React.useState('')
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = (fd.get('name') as string || '').trim()
    const email = (fd.get('email') as string || '').trim()
    const message = (fd.get('message') as string || '').trim()

    try {
      setStatus('sending')
      setError('')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data?.error || 'Failed to send')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (err: any) {
      setStatus('error')
      setError(err?.message || 'Something went wrong')
    }
  }

  const iconBtnStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    display: 'inline-grid',
    placeItems: 'center',
    borderRadius: 12,
    background: 'linear-gradient(180deg, var(--panel-bg-start), var(--panel-bg-end))',
    border: '1px solid var(--panel-border)'
  }

  return (
    <footer id="contact">
      <div className="container footer-cols">
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="First Last" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="your@email.com" autoComplete="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Write your message here..." required />
          </div>
          <button className="btn" type="submit" style={{ marginTop: 6 }} disabled={status==='sending'}>
            <span className="pulse" />{status==='sending' ? 'Sending…' : status==='sent' ? 'Sent!' : 'Send Message'}
          </button>
          {status==='error' && (
            <div style={{ color: '#fca5a5', fontSize: 12, marginTop: 6 }}>{error}</div>
          )}
        </form>

        <div className="contact-info">
          <div className="lead">Let’s build something thoughtful</div>
          <a className="email" href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'email@yourdomain.com'}`}>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'email@yourdomain.com'}</a>
          <div className="socials">
            <a aria-label="GitHub" href={`${process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/japinder12'}`} target="_blank" rel="noreferrer" className="icon-btn" style={iconBtnStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.635 22.4c.575.105.785-.25.785-.556 0-.275-.01-1.003-.015-1.97-3.193.694-3.868-1.54-3.868-1.54-.523-1.328-1.278-1.681-1.278-1.681-1.044-.714.08-.699.08-.699 1.154.081 1.762 1.186 1.762 1.186 1.026 1.758 2.694 1.25 3.35.956.104-.744.402-1.25.732-1.538-2.55-.29-5.235-1.275-5.235-5.67 0-1.253.45-2.277 1.185-3.08-.12-.29-.513-1.462.11-3.048 0 0 .965-.31 3.165 1.175a10.98 10.98 0 0 1 5.76 0c2.2-1.485 3.165-1.175 3.165-1.175.623 1.586.23 2.758.113 3.048.737.803 1.184 1.827 1.184 3.08 0 4.408-2.69 5.376-5.252 5.662.413.355.78 1.053.78 2.123 0 1.532-.014 2.767-.014 3.144 0 .308.206.667.792.553A11.5 11.5 0 0 0 12 .5Z" fill="currentColor"/>
              </svg>
            </a>
            <a aria-label="LinkedIn" href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/'}` } target="_blank" rel="noreferrer" className="icon-btn" style={iconBtnStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.662H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.604 0 4.269 2.373 4.269 5.458v6.285ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM6.99 20.452H3.68V9h3.31v11.452Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
