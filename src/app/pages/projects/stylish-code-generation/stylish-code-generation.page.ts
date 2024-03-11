import { Component } from '@angular/core'
import { IFrameResizerDirective } from '../../../directives/iframe-resizer.directive'
import { ResizableIframeComponent } from '../../../components/resizable-iframe/resizable-iframe.component'

@Component({
  selector: 'app-stylish-code-generation',
  standalone: true,
  templateUrl: './stylish-code-generation.page.html',
  imports: [IFrameResizerDirective, ResizableIframeComponent],
})
export class StylishCodeGenerationPage {}
