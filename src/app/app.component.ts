import { AfterViewInit, Component, OnInit } from '@angular/core'
import AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    AOS.init()
  }

  ngAfterViewInit(): void {
    // Fixes bug where AOS doesn't start until e.g. moving the browser window.
    // See https://github.com/michalsnik/aos/issues/807
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
