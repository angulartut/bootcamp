import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoomComponent } from './boom/boom.component';

@NgModule({
  declarations: [BoomComponent],
  exports:[
    BoomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SampleModule { }
