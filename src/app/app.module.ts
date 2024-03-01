import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgIconsModule } from "@ng-icons/core";
import { faBrandCss3, faBrandHtml5, faBrandLinkedinIn, faBrandGithub } from "@ng-icons/font-awesome/brands";
import { faSolidArrowRight } from "@ng-icons/font-awesome/solid";
import { ChipComponent } from './chip/chip.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ChipComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      faSolidArrowRight,
      faBrandHtml5,
      faBrandCss3,
      faBrandLinkedinIn,
      faBrandGithub
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
