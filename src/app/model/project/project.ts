import { Project } from './project.model'
import {
  angularTechnology,
  cSharpTechnology,
  cssTechnology,
  dartTechnology,
  flutterTechnology,
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
    routerLink: '#',
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
    routerLink: '/stylish-code-generation',
    technologies: [htmlTechnology, javascriptTechnology, p5jsTechnology],
    year: 2020,
  },
  {
    name: 'Mondriaan generator',
    description:
      "A tribute to the Dutch painter Piet Mondriaan, which is seen as a pioneer of the abstract arts in the 20th century. This generator creates paintings that resemble Mondriaan's works according to some rules, color schemes and probabilities.",
    image: 'assets/MondriaanGeneratorThumbnail.png',
    externalLink: 'https://tdenottelander.github.io/Mondriaan-Generator',
    technologies: [htmlTechnology, javascriptTechnology, p5jsTechnology],
    year: 2019,
  },
  {
    name: 'The Dark Descent',
    description: 'Minor project',
    image: 'assets/TheDarkDescentThumbnail.png',
    routerLink: '#',
    technologies: [unity3DTechnology, cSharpTechnology],
    year: 2017,
  },
  {
    name: 'Catan Buddy',
    description:
      'Catan Buddy is an android application that replaces the dice or acts as an additional tool get insight into dice roll statistics. The application is made with Flutter in Android Studio. The application has a SQLite database on the back-end to store game and player statistics.',
    image: 'assets/CatanBuddyThumbnail.png',
    routerLink: '#',
    technologies: [flutterTechnology, dartTechnology],
    year: 2020,
  },
  {
    name: "Langton's Ant Simulator",
    description:
      "A p5.js-based program that simulates Langton's Ant, which is a 2D universal Turing machine with a very simple set of rules, but complex emergent behavior.",
    image: 'assets/LangtonsAntThumbnail.png',
    externalLink: 'https://tdenottelander.github.io/Langtons-Ant-Simulator',
    technologies: [htmlTechnology, javascriptTechnology, p5jsTechnology],
    year: 2019,
  },
]
