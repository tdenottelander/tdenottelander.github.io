import { Component, Input } from '@angular/core'
import { Technology } from '../../../model/technology/technology.model'
import { NgIcon } from '@ng-icons/core'
import { NgIf, NgStyle } from '@angular/common'

@Component({
  selector: 'app-technology-chip',
  templateUrl: './technology-chip.component.html',
  standalone: true,
  imports: [NgStyle, NgIf, NgIcon],
})
export class TechnologyChipComponent {
  @Input({ required: true }) technology!: Technology

  hover = false
}
