import { Component } from '@angular/core'
import { Video } from '../../../model/video/video.model'
import { videos } from '../../../model/video/video'

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent {

  readonly videos: Video[] = videos
}
