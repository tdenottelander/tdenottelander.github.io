import { Component } from '@angular/core'
import { Video } from '../../../model/video/video.model'
import { videos } from '../../../model/video/video'
import { VideoCardComponent } from '../video-card/video-card.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  standalone: true,
  imports: [NgFor, VideoCardComponent],
})
export class VideosListComponent {
  readonly videos: Video[] = videos
}
