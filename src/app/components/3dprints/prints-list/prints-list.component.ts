import { Component } from '@angular/core'
import { Print } from '../../../model/print/print.model'
import { prints } from '../../../model/print/print'
import { PrintCardComponent } from '../print-card/print-card.component'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-prints-list',
  templateUrl: './prints-list.component.html',
  standalone: true,
  imports: [NgFor, PrintCardComponent, NgIf],
})
export class PrintsListComponent {
  readonly prints: Print[] = prints

  visibleNumber = 6
  additionalVisibleNumber = 6
  visiblePrints = prints.slice(0, this.visibleNumber)

  onShowMore() {
    this.visibleNumber += this.additionalVisibleNumber
    this.visiblePrints = prints.slice(0, this.visibleNumber)
  }

  onShowAll() {
    this.visibleNumber = prints.length
    this.visiblePrints = [...this.prints]
  }
}
