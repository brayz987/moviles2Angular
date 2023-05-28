import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeModuleRoutingModule } from './poke-module-routing.module';
import { PokeListComponent } from './container/poke-list/poke-list.component';
import { PokeModalComponent } from './container/poke-modal/poke-modal.component';


@NgModule({
  declarations: [
    PokeListComponent,
    PokeModalComponent
  ],
  imports: [
    CommonModule,
    PokeModuleRoutingModule
  ]
})
export class PokeModuleModule { }
