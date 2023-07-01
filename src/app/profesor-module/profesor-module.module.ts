import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorModuleRoutingModule } from './profesor-module-routing.module';
import { ProfesorComponent } from './container/profesor/profesor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfesorComponent],
  imports: [CommonModule, ProfesorModuleRoutingModule, FormsModule,ReactiveFormsModule],
})
export class ProfesorModuleModule {}
