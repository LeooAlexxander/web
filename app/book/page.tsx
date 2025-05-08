'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Leo Alexander',
  description: 'Schedule a 30-minute discovery session with Leo Alexander.',
}

export default function BookPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'discovery' })
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#292929' },
          dark: { 'cal-brand': '#fec205' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl h-[800px] overflow-auto rounded-xl border shadow bg-white dark:bg-zinc-900">
        <Cal
          namespace="discovery"
          calLink="leooalexxander/discovery"
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{ layout: 'month_view' }}
        />
      </div>
    </main>
  )
}
