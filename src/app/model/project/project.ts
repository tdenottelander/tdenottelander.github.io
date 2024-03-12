import { Project } from './project.model'
import {
  angularTechnology,
  cSharpTechnology,
  cssTechnology,
  htmlTechnology,
  javascriptTechnology,
  p5jsTechnology,
  typescriptTechnology,
  unity3DTechnology,
} from '../technology/technology'

export const techProjects: Project[] = [
  {
    name: 'Portfolio website',
    description:
      'A personal portfolio website to showcase my projects, skills and hobby projects.',
    image: 'assets/me.png',
    link: '#',
    technologies: [
      htmlTechnology,
      cssTechnology,
      typescriptTechnology,
      angularTechnology,
    ],
    year: 2024,
  },
  {
    name: 'Stylish code generation',
    description:
      'A p5.js-based program that generates a stylish representation of some code snippets. Never generates the same code twice.',
    image: 'assets/StylishCodeGenerationThumbnail.gif',
    link: '/stylish-code-generation',
    technologies: [htmlTechnology, javascriptTechnology, p5jsTechnology],
    year: 2020,
  },
  {
    name: 'Mondriaan generator',
    description:
      "A tribute to the Dutch painter Piet Mondriaan, which is seen as a pioneer of the abstract arts in the 20th century. This generator creates paintings that resemble Mondriaan's works according to some rules, color schemes and probabilities.",
    image: 'assets/MondriaanGeneratorThumbnail.png',
    link: '/mondriaan-generator',
    technologies: [htmlTechnology, javascriptTechnology, p5jsTechnology],
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
