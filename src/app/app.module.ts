import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { IntroductionComponent } from './components/introduction/introduction.component'
import { ProjectCardComponent } from './components/project-card/project-card.component'
import { NgIconsModule } from '@ng-icons/core'
import {
  faBrandCss3,
  faBrandGithub,
  faBrandHtml5,
  faBrandLinkedinIn,
  faBrandUnity,
} from '@ng-icons/font-awesome/brands'
import { faSolidArrowRight } from '@ng-icons/font-awesome/solid'
import { TechnologyChipComponent } from './components/technology-chip/technology-chip.component'
import { ContactComponent } from './components/contact/contact.component'
import { MondriaanGeneratorPage } from './pages/projects/mondriaan-generator/mondriaan-generator.page'
import { HomePage } from './pages/homepage/home.page'
import { ProjectsComponent } from './components/projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    // Components
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactComponent,
    TechnologyChipComponent,
    // Pages
    HomePage,
    MondriaanGeneratorPage,
  ],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
