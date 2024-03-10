import { Component, Input, OnInit } from '@angular/core'
import { Video } from '../../../model/video/video.model'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { NgIf } from '@angular/common'
import { CardComponent } from '../../card/card.component'

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  standalone: true,
  imports: [CardComponent, NgIf],
})
export class VideoCardComponent implements OnInit {
  @Input({ required: true }) video!: Video

  safeUrl?: SafeResourceUrl

  constructor(private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.video.url,
    )
  }
}
