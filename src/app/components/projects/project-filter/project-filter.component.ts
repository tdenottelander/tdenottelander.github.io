import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Project } from '../../../model/project/project.model'
import { Technology } from '../../../model/technology/technology.model'

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.scss'],
})
export class ProjectFilterComponent implements OnInit {

  @Input() techProjects: Project[] = []

  @Output() technologyFilterChanged = new EventEmitter<Technology[]>()

  technologies: Technology[] = []
  selectedTechnologies: Technology[] = []

  ngOnInit(): void {
    const technologies = this.techProjects.flatMap((project) => project.technologies || [])
    this.technologies = [...new Set(technologies)]
  }

  onFilterClick = (technology: Technology) => {
    if(this.selectedTechnologies.includes(technology)) {
      this.selectedTechnologies = this.selectedTechnologies.filter((t) => t !== technology)
    } else {
      this.selectedTechnologies.push(technology)
    }
    this.technologyFilterChanged.emit(this.selectedTechnologies)
  }

  isSelected = (technology: Technology) => this.selectedTechnologies.includes(technology)
}
