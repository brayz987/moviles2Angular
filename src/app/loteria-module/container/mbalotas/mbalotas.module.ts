import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalotaComponent } from './balota/balota.component';



@NgModule({
  exports: [
    BalotaComponent
  ],
  declarations: [
    BalotaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MbalotasModule { }
