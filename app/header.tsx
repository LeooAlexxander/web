'use client'
import Image from 'next/image'
import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-8 flex flex-col items-start space-y-2">
      {/* ① Circular avatar container */}
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image
          src="/avatar.jpg"      // make sure this matches your file in /public
          alt="Leo Alexander"
          width={80}
          height={80}
          className="object-cover"
        />
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
