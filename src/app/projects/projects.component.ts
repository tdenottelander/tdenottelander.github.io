import { Component } from '@angular/core';
import { Project } from '../project-card/project.model'
import {cssTechnology, htmlTechnology} from "../chip/chip.component";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  readonly projects: Project[] = []

  constructor() {
    this.projects.push({
      name: 'My First Project',
      description: 'This is my first project-card',
      image: 'https://picsum.photos/500',
      link: '#',
      technologies: [ htmlTechnology, cssTechnology ],
    })
    this.projects.push({
      name: 'My Second Project',
      description: 'This is my second project-card',
      image: 'https://picsum.photos/500',
      link: '#'
    })
    this.projects.push({
      name: 'My Third Project',
      description: 'This is my third project-card',
      image: 'https://picsum.photos/500',
      link: '#'
    })
    this.projects.push({
      name: 'My Fourth Project',
      description: 'This is my fourth project-card',
      image: 'https://picsum.photos/500',
      link: '#'
    })
    this.projects.push({
      name: 'My Fifth Project',
      description: 'This is my fifth project-card',
      image: 'https://picsum.photos/500',
      link: '#'
    })
    this.projects.push({
      name: 'My Sixth Project',
      description: 'This is my sixth project-card',
      image: 'https://picsum.photos/500',
      link: '#'
    })
  }
}
