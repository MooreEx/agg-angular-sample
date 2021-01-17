import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function enterLeaveScale(
  triggerName: string,
  minScale = 0,
  maxScale = 1,
  duration = 300,
  delay = 0,
): AnimationTriggerMetadata {
  return trigger(triggerName, [
    transition(':enter', [
      style({ transform: 'scale(0.8)' }),
      animate(`${duration}ms ${delay}ms ease`, style({ transform: `scale(${maxScale})` })),
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)' }),
      animate(`${duration}ms ${delay}ms ease`, style({ transform: `scale(${minScale})` })),
    ]),
  ]);
}
