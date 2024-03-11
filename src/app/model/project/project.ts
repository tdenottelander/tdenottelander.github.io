import { Project } from './project.model'
import {
  cSharpTechnology,
  htmlTechnology,
  p5jsTechnology,
  unity3DTechnology,
} from '../technology/technology'

export const techProjects: Project[] = [
  {
    name: 'Stylish code generation',
    description:
      'A p5.js-based program that generates a stylish representation of some code snippets. Never generates the same code twice.',
    image: 'assets/StylishCodeGenerationThumbnail.gif',
    link: '/stylish-code-generation',
    technologies: [htmlTechnology, p5jsTechnology],
    year: 2020,
  },
  {
    name: 'Mondriaan generator',
    description:
      "A tribute to the Dutch painter Piet Mondriaan, which is seen as a pioneer of the abstract arts in the 20th century. This generator creates paintings that resemble Mondriaan's works according to some rules, color schemes and probabilities.",
    image: 'assets/MondriaanGeneratorThumbnail.png',
    link: '/mondriaan-generator',
    technologies: [htmlTechnology, p5jsTechnology],
    year: 2019,
  },
  {
    name: 'The Dark Descent',
    description: 'Minor project',
    image: 'assets/TheDarkDescentThumbnail.png',
    link: '#',
    technologies: [unity3DTechnology, cSharpTechnology],
    year: 2017,
  },
]
