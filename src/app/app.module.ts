import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { IntroductionComponent } from './components/introduction/introduction.component'
import { NgIconsModule } from '@ng-icons/core'
import {
  faBrandCss3,
  faBrandGithub,
  faBrandHtml5,
  faBrandLinkedinIn,
  faBrandUnity,
} from '@ng-icons/font-awesome/brands'
import { faSolidArrowRight } from '@ng-icons/font-awesome/solid'
import { ContactComponent } from './components/contact/contact.component'
import { MondriaanGeneratorPage } from './pages/projects/mondriaan-generator/mondriaan-generator.page'
import { HomePage } from './pages/homepage/home.page'
import { ProjectFilterComponent } from './components/projects/project-filter/project-filter.component'
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component'
import { TechnologyChipComponent } from './components/projects/technology-chip/technology-chip.component'
import { ProjectCardComponent } from './components/projects/project-card/project-card.component'
import { TechnologyFilterComponent } from './components/projects/technology-filter/technology-filter.component'
import { PrintCardComponent } from './components/3dprints/print-card/print-card.component'
import { PrintsListComponent } from './components/3dprints/prints-list/prints-list.component'
import { VideosListComponent } from './components/videos/videos-list/videos-list.component'
import { VideoCardComponent } from './components/videos/video-card/video-card.component'
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      faSolidArrowRight,
      faBrandHtml5,
      faBrandCss3,
      faBrandLinkedinIn,
      faBrandGithub,
      faBrandUnity,
    }),
    // Components
    HeaderComponent,
    IntroductionComponent,
    CardComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    ContactComponent,
    TechnologyChipComponent,
    ProjectFilterComponent,
    TechnologyFilterComponent,
    PrintsListComponent,
    PrintCardComponent,
    VideosListComponent,
    VideoCardComponent,
    // Pages
    HomePage,
    MondriaanGeneratorPage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
