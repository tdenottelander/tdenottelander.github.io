import {Component, Input} from '@angular/core';

export type Technology = {
  name: string
  icon?: string
  iconImage?: string
  color: string
  link: string
}

export const htmlTechnology: Technology = {
  name: 'HTML',
  icon: 'faBrandHtml5',
  color: '#E44D26',
  link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
}

export const cssTechnology: Technology = {
  name: 'CSS',
  icon: 'faBrandCss3',
  color: '#1572B6',
  link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
}

export const p5jsTechnology: Technology = {
  name: 'p5.js',
  iconImage: 'assets/P5.js_icon.svg',
  color: '#ED225D',
  link: 'https://p5js.org/'
}

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input({required: true}) technology!: Technology

  hover: boolean = false
}

