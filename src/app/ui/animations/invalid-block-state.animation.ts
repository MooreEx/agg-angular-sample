import { animate, AnimationTriggerMetadata, keyframes, state, style, transition, trigger } from '@angular/animations';

export function invalidBlockStateAnimation(triggerName: string): AnimationTriggerMetadata {
  return trigger(triggerName, [
    state(
      'invalid',
      style({
        'border-color': '#ba0000',
        background: '#210000',
      }),
    ),
    state(
      'valid',
      style({
        'border-color': 'transparent',
      }),
    ),
    transition('invalid => valid', [style({ 'border-color': 'transparent' }), animate('0.3s')]),
    transition('valid => invalid', [
      style({ 'text-decoration': 'none' }),
      animate(
        '1s',
        keyframes([
          style({ 'border-color': 'transparent', background: 'transparent', offset: 0 }),
          style({ 'border-color': '#ba0000', background: '#210000', offset: 0.2 }),
          style({ 'border-color': 'transparent', background: 'transparent', offset: 0.4 }),
          style({ 'border-color': '#ba0000', background: '#210000', offset: 0.6 }),
          style({ 'border-color': 'transparent', background: 'transparent', offset: 0.8 }),
          style({ 'border-color': '#ba0000', background: '#210000', offset: 1 }),
        ]),
      ),
    ]),
  ]);
}
