import { Component, Input } from '@angular/core'
import { Print } from '../../../model/print/print.model'

@Component({
  selector: 'app-print-card',
  templateUrl: './print-card.component.html',
  styleUrls: ['./print-card.component.scss'],
})
export class PrintCardComponent {

  @Input({ required: true }) print!: Print
}
