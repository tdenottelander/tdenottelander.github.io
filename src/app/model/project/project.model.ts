import { Technology } from '../technology/technology.model'

export type Project = {
  name: string
  description: string
  image: string
  routerLink?: string
  externalLink?: string
  technologies?: Technology[]
  year?: number
}
