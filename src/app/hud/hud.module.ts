import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HudComponent } from './hud.component';
import { KeysHelperComponent } from './components/keys-helper/keys-helper.component';
import { KeysHelperItemComponent } from './components/keys-helper-item/keys-helper-item.component';
import { MaterialModule } from '@app/ui/material/material.module';



@NgModule({
  declarations: [HudComponent, KeysHelperComponent, KeysHelperItemComponent],
  exports: [
    HudComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class HudModule { }
