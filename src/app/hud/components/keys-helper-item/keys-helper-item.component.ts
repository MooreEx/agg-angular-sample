import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keys-helper-item',
  templateUrl: './keys-helper-item.component.html',
  styleUrls: ['./keys-helper-item.component.scss']
})
export class KeysHelperItemComponent {
  @Input() keyName: string;
  @Input() iconName: string;
}
