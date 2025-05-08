'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
    >
      {THEMES_OPTIONS.map((opt) => (
        <button
          key={opt.id}
          className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-150 focus-visible:outline-2
            ${theme === opt.id
              ? 'bg-zinc-200 text-zinc-800 ring-1 ring-zinc-300 dark:bg-zinc-700 dark:text-white dark:ring-zinc-600'
              : 'text-zinc-500 dark:text-zinc-400'
            }`}
          type="button"
          aria-label={`Switch to ${opt.label} theme`}
          data-id={opt.id}
        >
          {opt.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-8 bg-transparent dark:bg-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-zinc-500">
            © 2025 • Leo Alexander
          </div>
          <div className="text-xs text-zinc-400">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  )
}
