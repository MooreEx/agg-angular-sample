import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fadeInFadeOutAnimation } from '@app/ui/animations';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrls: ['./hud.component.scss'],
  animations: [
    fadeInFadeOutAnimation('fadeInFadeOutAnimation', 1000),
  ]
})
export class HudComponent implements OnInit {
  public isActive = false;

  constructor(protected cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => this.setActive(true), 1000);
  }

  setActive(nextState: boolean): void {
    this.isActive = nextState;

    // нужно для обновления рендера если в игре отключен курсор
    this.cdRef.detectChanges();
  }
}
