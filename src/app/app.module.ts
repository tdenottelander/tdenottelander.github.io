import { importProvidersFrom, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgIconsModule } from '@ng-icons/core'
import {
  faBrandAngular,
  faBrandCss3,
  faBrandGithub,
  faBrandHtml5,
  faBrandLinkedinIn,
  faBrandUnity,
} from '@ng-icons/font-awesome/brands'
import { faSolidArrowRight } from '@ng-icons/font-awesome/solid'
import { ContactComponent } from './components/contact/contact.component'
import { HttpClientModule } from '@angular/common/http'
import { simpleJavascript, simpleTypescript } from '@ng-icons/simple-icons'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
      faBrandAngular,
      simpleJavascript,
      simpleTypescript,
    }),
    BrowserAnimationsModule,
    ContactComponent,
  ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent],
})
export class AppModule {}
