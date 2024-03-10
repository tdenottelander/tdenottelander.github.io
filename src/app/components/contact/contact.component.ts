import { Component } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
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
