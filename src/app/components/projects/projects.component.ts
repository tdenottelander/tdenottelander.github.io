import { Component } from '@angular/core';
import { Project } from '../project-card/project.model'
import { htmlTechnology, p5jsTechnology } from "../chip/chip.component";

const techProjects: Project[] = [
  {
    name: 'Stylish code generation',
    description: 'A p5.js-based program that generates a stylish representation of some code snippets. Never generates the same code twice.',
    image: 'assets/StylishCodeGenerationThumbnail.gif',
    link: '#',
    technologies: [ htmlTechnology, p5jsTechnology ],
    year: 2020,
  },
  {
    name: 'Mondriaan generator',
    description: 'A tribute to the Dutch painter Piet Mondriaan, which is seen as a pioneer of the abstract arts in the 20th century. This generator creates paintings that resemble Mondriaan\'s works according to some rules, color schemes and probabilities.',
    image: 'assets/MondriaanGeneratorThumbnail.png',
    link: '#',
    technologies: [ htmlTechnology, p5jsTechnology ],
    year: 2019,
  }
]

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  readonly projects: Project[] = techProjects
}
