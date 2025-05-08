'use client'

import { useEffect } from 'react'

export default function BookPage() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      script.onload = () => initCal()
      document.body.appendChild(script)
    } else {
      initCal()
    }

    function initCal() {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('init', '30min', { origin: 'https://cal.com' })
        // @ts-ignore
        window.Cal.ns['30min']('inline', {
          elementOrSelector: '#my-cal-inline',
          config: { layout: 'month_view' },
          calLink: 'leooalexxander/30min',
        })
        // @ts-ignore
        window.Cal.ns['30min']('ui', {
          cssVarsPerTheme: {
            light: { 'cal-brand': '#292929' },
            dark: { 'cal-brand': '#fec205' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        })
      }
    }
  }, [])

  return (
    <main className="min-h-screen p-4 flex items-center justify-center">
      <div
        id="my-cal-inline"
        className="w-full max-w-3xl h-[800px] overflow-auto bg-white dark:bg-zinc-900 rounded-xl shadow"
      />
    </main>
  )
}
