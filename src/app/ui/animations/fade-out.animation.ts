import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function fadeOutAnimation(triggerName: string, duration = 300, delay = 0): AnimationTriggerMetadata {
  return trigger(triggerName, [
    transition(':leave', [style({ opacity: '1' }), animate(`${duration}ms ${delay}ms ease`, style({ opacity: '0' }))]),
  ]);
}
