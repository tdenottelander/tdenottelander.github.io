import { Component } from '@angular/core'
import { Print } from '../../../model/print/print.model'
import { prints } from '../../../model/print/print'
import { PrintCardComponent } from '../print-card/print-card.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-prints-list',
  templateUrl: './prints-list.component.html',
  standalone: true,
  imports: [NgFor, PrintCardComponent],
})
export class PrintsListComponent {

  readonly prints: Print[] = prints
}
