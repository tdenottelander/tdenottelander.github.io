import { Component } from '@angular/core'
import { Print } from '../../../model/print/print.model'
import { prints } from '../../../model/print/print'

@Component({
  selector: 'app-prints-list',
  templateUrl: './prints-list.component.html',
})
export class PrintsListComponent {

  readonly prints: Print[] = prints
}
