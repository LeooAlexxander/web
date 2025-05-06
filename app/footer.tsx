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

function SimpleTextLoop({ items, interval = 3000 }: { items: string[]; interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className="relative h-4 w-auto text-xs text-zinc-500">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute inline-block"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-200 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <SimpleTextLoop items={['© 2025', 'Leo Alexander']} interval={3000} />
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
