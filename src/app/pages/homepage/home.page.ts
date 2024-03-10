import { Component } from '@angular/core'
import { VideosListComponent } from '../../components/videos/videos-list/videos-list.component'
import { PrintsListComponent } from '../../components/3dprints/prints-list/prints-list.component'
import { ProjectsListComponent } from '../../components/projects/projects-list/projects-list.component'
import { IntroductionComponent } from '../../components/introduction/introduction.component'

@Component({
  selector: 'app-homepage',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [
    IntroductionComponent,
    ProjectsListComponent,
    PrintsListComponent,
    VideosListComponent,
  ],
})
export class HomePage {

}

