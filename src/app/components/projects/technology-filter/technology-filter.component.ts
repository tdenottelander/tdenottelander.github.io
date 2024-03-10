import { Component, Input } from '@angular/core'
import { Technology } from '../../../model/technology/technology.model'
import { NgIcon } from '@ng-icons/core'
import { NgIf, NgStyle } from '@angular/common'

@Component({
  selector: 'app-technology-filter',
  templateUrl: './technology-filter.component.html',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    NgIcon,
  ],
})
export class TechnologyFilterComponent {

  @Input({ required: true }) technology!: Technology
  @Input({ required: true }) selected!: boolean

  hover = false
}
