import { Component, Input } from '@angular/core'
import { Print } from '../../../model/print/print.model'

@Component({
  selector: 'app-print-card',
  templateUrl: './print-card.component.html',
  standalone: true,
})
export class PrintCardComponent {
  @Input({ required: true }) print!: Print
}
