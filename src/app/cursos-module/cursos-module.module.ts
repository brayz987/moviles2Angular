import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosModuleRoutingModule } from './cursos-module-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosModuleRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ]
})
export class CursosModuleModule { }
