import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestWorkComponent } from './test-work.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { TestPageComponent } from './pages/test-page/test-page.component';



@NgModule({
  declarations: [TestWorkComponent, TestComponentComponent, TestPageComponent],
  exports: [
    TestWorkComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class TestWorkModule { }
