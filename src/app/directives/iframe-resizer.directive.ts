import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core'
import { IFrameComponent, iframeResizer } from 'iframe-resizer'

/**
 * To use this directive, first add the following script in the head of the
 * html that should be displayed in the iframe:
 *
 * <script src="assets/js/iframeResizer.contentWindow.min.js"></script>
 *
 * Based on the comment of arminbaljic in the iframe-resizer repository.
 * <br>Comment: {@link https://github.com/davidjbradshaw/iframe-resizer/issues/478#issuecomment-347958630}
 * <br>Repository: {@link https://github.com/davidjbradshaw/iframe-resizer}
 */
@Directive({
  selector: '[appIframeResizer]',
  standalone: true,
})
export class IFrameResizerDirective implements AfterViewInit, OnDestroy {
  component?: IFrameComponent | null

  constructor(public element: ElementRef) {}

  ngAfterViewInit() {
    const components = iframeResizer(
      {
        checkOrigin: false,
        heightCalculationMethod: 'documentElementOffset',
        log: false,
      },
      this.element.nativeElement,
    )

    /* save component reference so we can close it later */
    this.component = components && components.length > 0 ? components[0] : null
  }

  ngOnDestroy(): void {
    if (this.component && this.component.iFrameResizer) {
      this.component.iFrameResizer.close()
    }
  }
}
