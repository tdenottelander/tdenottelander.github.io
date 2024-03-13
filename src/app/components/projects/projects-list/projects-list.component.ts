import { Component } from '@angular/core'
import { Project } from '../../../model/project/project.model'
import { techProjects } from '../../../model/project/project'
import { Technology } from '../../../model/technology/technology.model'
import { ProjectCardComponent } from '../project-card/project-card.component'
import { NgFor } from '@angular/common'
import { ProjectFilterComponent } from '../project-filter/project-filter.component'
import { flyInOutRightAnimation } from '../../../animation/animations'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  standalone: true,
  imports: [ProjectFilterComponent, NgFor, ProjectCardComponent],
  animations: [flyInOutRightAnimation],
})
export class ProjectsListComponent {
  readonly projects: Project[] = techProjects

  visibleProjects: Project[] = [...this.projects]

  readonly onTechnologyFilterChanged = (technologies: Technology[]) => {
    if (technologies.length === 0) {
      this.visibleProjects = [...this.projects]
      return
    }
    this.visibleProjects = [
      ...this.projects.filter((project) => {
        return project.technologies?.some((technology) =>
          technologies.includes(technology),
        )
      }),
    ]
  }
}
