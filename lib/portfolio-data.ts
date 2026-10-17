export const siteConfig = {
  name: 'Jewel Mabunga',
  role: 'Web & Product Designer',
  email: 'jewelmabunga.design@gmail.com',
  linkedin: '', // Add a LinkedIn URL if desired.
  resume: '/resume.pdf',
}

export const about = {
  shortBio: '', // Replace with the concise homepage introduction.
  longBio: '', // Replace with the longer About page biography.
  location: '',
  portrait: '', // Replace with /images/about/portrait.jpg.
}

export const projects = [
  {
    slug: 'studio-mark-identity', number: '01', title: 'Studio Mark Identity', category: 'Brand / Visual Identity', year: '2025',
    description: '', challenge: '', approach: '', result: '',
    thumbnail: '', heroImage: '',
    images: ['', '', ''],
    info: { role: '', services: '', year: '2025' },
  },
  {
    slug: 'commerce-reimagined', number: '02', title: 'Commerce Reimagined', category: 'Product / E-commerce', year: '2025',
    description: '', challenge: '', approach: '', result: '',
    thumbnail: '', heroImage: '',
    images: ['', '', ''],
    info: { role: '', services: '', year: '2025' },
  },
  {
    slug: 'field-companion-app', number: '03', title: 'Field Companion App', category: 'Product / Mobile', year: '2024',
    description: '', challenge: '', approach: '', result: '',
    thumbnail: '', heroImage: '',
    images: ['', '', ''],
    info: { role: '', services: '', year: '2024' },
  },
]

export const interests = [
  { number: '01', title: '', description: '', image: '' },
  { number: '02', title: '', description: '', image: '' },
  { number: '03', title: '', description: '', image: '' },
  { number: '04', title: '', description: '', image: '' },
]

export type Project = (typeof projects)[number]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}

export const labelClass = 'text-[9px] uppercase tracking-[0.28em] text-[#7A3042]'
export const metaClass = 'text-[9px] uppercase tracking-[0.22em] text-[#68635d]'

export const localImageNote = 'Replace empty image paths in lib/portfolio-data.ts with files under public/images/projects/<project-slug>/.'
