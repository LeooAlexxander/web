'use client'

import { useEffect } from 'react'

export default function BookPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      Cal('init', '30min', { origin: 'https://cal.com' })
      // @ts-ignore
      Cal.ns['30min']('inline', {
        elementOrSelector: '#my-cal-inline',
        config: { layout: 'month_view' },
        calLink: 'leooalexxander/30min',
      })
      // @ts-ignore
      Cal.ns['30min']('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#292929' },
          dark: { 'cal-brand': '#fec205' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen p-4">
      <div
        id="my-cal-inline"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      />
    </main>
  )
}
