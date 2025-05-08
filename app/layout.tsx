import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  viewportFit: 'cover', // Ensure viewport respects iPhone safe areas
}

export const metadata: Metadata = {
  title: 'Nim - Personal website template',
  description:
    'Nim is a free and open-source personal website template built with Next.js 15, React 19 and Motion-Primitives.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white"
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <body
        className={`${geist.variable} ${geistMono.variable} min-h-screen bg-white dark:bg-zinc-950 tracking-tight antialiased`}
        style={{
          paddingTop: 'env(safe-area-inset-top)', // Respect iPhone notch space
          paddingBottom: 'env(safe-area-inset-bottom)', // Respect bottom safe area
        }}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

