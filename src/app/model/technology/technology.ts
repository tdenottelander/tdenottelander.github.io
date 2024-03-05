import { Technology } from './technology.model'

export const htmlTechnology: Technology = {
  name: 'HTML',
  icon: 'faBrandHtml5',
  color: '#E44D26',
  link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
}
export const cssTechnology: Technology = {
  name: 'CSS',
  icon: 'faBrandCss3',
  color: '#1572B6',
  link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
}
export const p5jsTechnology: Technology = {
  name: 'p5.js',
  iconImage: 'assets/P5.js_icon.svg',
  color: '#ED225D',
  link: 'https://p5js.org/',
}
export const unity3DTechnology: Technology = {
  name: 'Unity3D',
  icon: 'faBrandUnity',
  color: '#222222',
  link: '#',
}
export const cSharpTechnology: Technology = {
  name: 'C#',
  iconImage: 'assets/c-sharp-c.svg',
  color: '#551191',
  link: '#',
}

export const technologies = [
  htmlTechnology,
  cssTechnology,
  p5jsTechnology,
  unity3DTechnology,
  cSharpTechnology,
]
