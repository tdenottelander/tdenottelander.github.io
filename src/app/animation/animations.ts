import { animate, state, style, transition, trigger } from '@angular/animations'

export const flyInOutRightAnimation = trigger('flyInOutRight', [
  state(
    'in',
    style({
      opacity: '1',
      transform: 'translateX(0)',
    }),
  ),
  state(
    'void',
    style({
      opacity: '0',
      transform: 'translateX(100%)',
    }),
  ),
  transition('void <=> *', [animate(100)]),
])
