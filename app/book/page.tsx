import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Call | Leo Alexander',
  description: 'Schedule a 30-minute session with Leo Alexander.',
}

export default function BookPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <iframe
        src="https://cal.com/leooalexxander/30min"
        width="100%"
        height="700"
        className="rounded-xl border shadow max-w-3xl w-full bg-white dark:bg-zinc-900"
        style={{ minHeight: '700px' }}
        frameBorder="0"
        title="Book a call with Leo"
      ></iframe>
    </main>
  )
}
