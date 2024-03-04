import { Technology } from '../technology-chip/technology-chip.component'

export type Project = {
  name: string
  description: string
  image: string
  link: string
  technologies?: Technology[]
  year?: number
}
