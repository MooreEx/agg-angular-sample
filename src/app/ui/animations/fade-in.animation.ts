import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function fadeInAnimation(triggerName: string, duration = 300, delay = 0): AnimationTriggerMetadata {
  return trigger(triggerName, [
    transition(':enter', [style({ opacity: '0' }), animate(`${duration}ms ${delay}ms ease`, style({ opacity: '1' }))]),
  ]);
}
