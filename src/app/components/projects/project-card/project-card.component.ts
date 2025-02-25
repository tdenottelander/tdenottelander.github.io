import { Component, Input } from '@angular/core'
import { Project } from '../../../model/project/project.model'
import { NgIcon } from '@ng-icons/core'
import { TechnologyChipComponent } from '../technology-chip/technology-chip.component'
import { NgFor, NgIf } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    TechnologyChipComponent,
    NgIcon,
    RouterLink,
    RouterLinkActive,
  ],
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project
}
