import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
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
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-full bg-white text-black dark:bg-zinc-950 dark:text-white"
    >
      <body
        className={`${geist.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white dark:bg-zinc-950 tracking-tight antialiased overflow-x-hidden`}
        style={{
          WebkitTapHighlightColor: 'transparent',
          minHeight: '100svh',
        }}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex flex-1 flex-col font-[family-name:var(--font-inter-tight)]">
            {/* Main content container */}
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20 overflow-x-hidden">
              <Header />
              {children}
            </div>

            {/* Footer with same max-width container inside */}
            <div className="w-full border-t border-zinc-200 dark:border-zinc-800">
              <div className="mx-auto w-full max-w-screen-sm px-4">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
