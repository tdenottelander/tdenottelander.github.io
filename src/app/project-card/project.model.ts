import {Technology} from "../chip/chip.component";

export type Project = {
  name: string
  description: string
  image: string
  link: string
  technologies?: Technology[]
}
