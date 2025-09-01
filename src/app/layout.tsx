import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Japinder's Portfolio",
  description: 'Software Engineer',
  metadataBase: new URL('https://japindernarula.com'),
  icons: {
    icon: [
      { url: '/icon.svg?v=3' },
      { url: '/icon.png?v=3' },
      { url: '/favicon.svg?v=3' },
    ],
    shortcut: '/icon.svg?v=3',
    apple: '/apple-icon.png?v=3',
  },
  // openGraph: {
  //   title: "Japinder's Portfolio",
  //   description: 'Software Engineer',
  //   url: 'https://japindernarula.com',
  //   siteName: 'japindernarula.com',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "Japinder's Portfolio",
  //   description: 'Software Engineer',
  // },
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
