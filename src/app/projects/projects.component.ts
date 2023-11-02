import { Component } from '@angular/core';
import { Project } from '../project/project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  readonly projects: Project[] = []

  constructor() {
    this.projects.push({
      name: 'My First Project',
      description: 'This is my first project',
      image: 'https://picsum.photos/500',
      link: 'https://www.google.com'
    })
    this.projects.push({
      name: 'My Second Project',
      description: 'This is my second project',
      image: 'https://picsum.photos/500',
      link: 'https://www.google.com'
    })
    this.projects.push({
      name: 'My Third Project',
      description: 'This is my third project',
      image: 'https://picsum.photos/500',
      link: 'https://www.google.com'
    })
    this.projects.push({
      name: 'My Fourth Project',
      description: 'This is my fourth project',
      image: 'https://picsum.photos/500',
      link: 'https://www.google.com'
    })
    this.projects.push({
      name: 'My Fifth Project',
      description: 'This is my fifth project',
      image: 'https://picsum.photos/500',
      link: 'https://www.google.com'
    })
    this.projects.push({
      name: 'My Sixth Project',
      description: 'This is my sixth project',
      image: 'https://picsum.photos/500',
      link: 'https://www.google.com'
    })
  }
}
