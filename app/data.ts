type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Documenting the Journey',
    description:
      'My YouTube channel is the place where I document my journey, share my learnings and make an impact on others doing that.',
    link: 'https://www.youtube.com/@LeoSquaretoes',
    image: '/images/youtube.png', 
    id: 'project1',
  },
  {
    name: 'Alchos AI',
    description: 'An AI app that helps you track your habits, achieve your goals, and do your affirmations.',
    link: 'https://x.com/LeooAlexxander',
    image: '/images/waitlist.png', 
    id: 'project2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'X',
    link: 'https://x.com/LeooAlexxander',
  },
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@LeoSquaretoes',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/leosqu',
  },
]
