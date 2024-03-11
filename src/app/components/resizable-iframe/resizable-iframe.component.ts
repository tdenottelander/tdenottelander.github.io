import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http'
import { catchError, of } from 'rxjs'
import { IFrameResizerDirective } from '../../directives/iframe-resizer.directive'
import { LoaderComponent } from '../loader/loader.component'

@Component({
  selector: 'app-resizable-iframe',
  standalone: true,
  imports: [CommonModule, IFrameResizerDirective, LoaderComponent],
  templateUrl: './resizable-iframe.component.html',
  styles: [':host { width: 100% }'],
})
export class ResizableIframeComponent implements OnInit {
  @Input({ required: true }) urlToHtml!: string
  @Input() title?: string

  safeHtml?: SafeHtml
  pending = true

  constructor(
    private readonly http: HttpClient,
    private readonly domSanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.http
      .get(this.urlToHtml, { responseType: 'text' })
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(undefined)
        }),
      )
      .subscribe((document: string | undefined) => {
        if (document) {
          this.safeHtml = this.domSanitizer.bypassSecurityTrustHtml(document)
        }
        this.pending = false
      })
  }
}
