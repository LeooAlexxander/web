'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
 import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex flex-col items-center space-y-2">
      <Image
        src="/avatar.jpg"
        alt="Leo Alexander"
        width={96}
        height={96}
        className="rounded-full"
      />
      <Link href="/" className="font-medium text-black dark:text-white text-lg">
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
    </header>
  )
}
