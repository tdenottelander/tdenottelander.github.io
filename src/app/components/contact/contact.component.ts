import { Component } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [NgFor, NgIcon],
})
export class ContactComponent {

  links = [
    {
      url: 'https://www.linkedin.com/in/tdenottelander/',
      icon: 'faBrandLinkedinIn',
    },
    {
      url: 'https://github.com/tdenottelander',
      icon: 'faBrandGithub',
    },
  ] as const
}
