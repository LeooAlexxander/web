'use client'
import Image from 'next/image'
import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-8 flex flex-col items-start space-y-2">
      {/* ① Circular avatar container with border */}
      <div className="p-1 rounded-full ring-[3px] ring-zinc-200 dark:ring-zinc-800">
  <div className="w-20 h-20 overflow-hidden rounded-full">
    <Image
      src="/avatar.jpg"
      alt="Leo Alexander"
      width={80}
      height={80}
      className="object-cover"
    />
  </div>
</div>

      {/* ② Name and role */}
      <div className="flex flex-col items-start">
        <Link
          href="/"
          className="text-xl font-bold text-black dark:text-white"
        >
          Leo Alexander
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Entrepreneur
        </TextEffect>
      </div>
    </header>
  )
}
