import { NextResponse } from 'next/server'

type Body = {
  name?: string
  email?: string
  message?: string
}

const EMAIL_REGEX = /.+@.+\..+/

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Body
    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const message = (data.message || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO = process.env.CONTACT_TO_EMAIL || 'email@yourdomain.com'
    const FROM = process.env.RESEND_FROM || 'Portfolio <onboarding@resend.dev>'

    if (!RESEND_API_KEY) {
      return NextResponse.json({ ok: false, error: 'Server misconfigured: missing RESEND_API_KEY' }, { status: 500 })
    }

    const subject = `Portfolio inquiry from ${name}`
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject,
        text,
        reply_to: email,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      return NextResponse.json({ ok: false, error: 'Email send failed', details: errText }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: 'Unexpected error', details: String(err?.message || err) }, { status: 500 })
  }
}

