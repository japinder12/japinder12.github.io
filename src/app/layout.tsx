import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Japinder Narula · Portfolio',
  description: 'Creative developer portfolio — animations, interactions, and selected work.',
  metadataBase: new URL('https://japinder12.github.io'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('theme');
                const theme = stored || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch {}
            })();`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
