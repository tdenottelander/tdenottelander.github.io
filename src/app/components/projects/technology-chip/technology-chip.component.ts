import { Component, Input } from '@angular/core'
import { Technology } from '../../../model/technology/technology.model'

@Component({
  selector: 'app-technology-chip',
  templateUrl: './technology-chip.component.html',
})
export class TechnologyChipComponent {
  @Input({ required: true }) technology!: Technology

  hover = false
}

