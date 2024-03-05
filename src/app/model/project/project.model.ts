import { Technology } from '../technology/technology.model'

export type Project = {
  name: string
  description: string
  image: string
  link: string
  technologies?: Technology[]
  year?: number
}
