import { Component, OnInit } from '@angular/core';
import { KeysHelperData } from '@app/hud/shared/interfaces/keys-helper.interface';

@Component({
  selector: 'app-keys-helper',
  templateUrl: './keys-helper.component.html',
  styleUrls: ['./keys-helper.component.scss']
})
export class KeysHelperComponent implements OnInit {
  data: KeysHelperData = {
    toggleKeyName: 'F11',
    keyHelpers: [
      {
        iconName: 'cash_fill', // из app/ui/material/material.service
        keyName: 'F1',
      },
      {
        iconName: 'credit_card_fill', // из app/ui/material/material.service
        keyName: 'F2',
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }
}
