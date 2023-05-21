import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasModuleRoutingModule } from './notas-module-routing.module';
import { FormsModule } from '@angular/forms';
import { NotasComponent } from './container/notas/notas.component';


@NgModule({
  declarations: [NotasComponent],
  imports: [
    CommonModule,
    NotasModuleRoutingModule,
    FormsModule
  ]
})
export class NotasModuleModule { }
