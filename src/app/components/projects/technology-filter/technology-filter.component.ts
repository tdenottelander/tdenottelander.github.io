import { Component, Input } from '@angular/core'
import { Technology } from '../../../model/technology/technology.model'

@Component({
  selector: 'app-technology-filter',
  templateUrl: './technology-filter.component.html',
  styleUrls: ['./technology-filter.component.scss'],
})
export class TechnologyFilterComponent {

  @Input({ required: true }) technology!: Technology
  @Input({ required: true }) selected!: boolean

  hover = false
}
