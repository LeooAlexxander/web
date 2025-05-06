type Project = {
  name: string
  description: string
  link: string
  video: string
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
    video:
      'https://www.youtube.com/watch?v=QsMT07BXzlM&t=1s',
    id: 'project1',
  },
  {
    name: 'Alchos AI',
    description: 'An AI app that helps you track your habits, achieve your goals, and do your affirmations.',
    link: 'https://x.com/LeooAlexxander',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
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
