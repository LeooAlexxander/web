'use client'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-start space-x-4">
  <Image
    src="/avatar.jpg"
    alt="Leo Alexander"
    width={64}
    height={64}
    className="rounded-full object-cover"
  />
  <div>
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
  </div>
</header>
  )
}
