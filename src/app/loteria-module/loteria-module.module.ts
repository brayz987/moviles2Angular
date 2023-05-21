import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteriaModuleRoutingModule } from './loteria-module-routing.module';
import { MbalotasModule } from './container/mbalotas/mbalotas.module';
import { MloteriapadreModule } from './container/mloteriapadre/mloteriapadre.module';
import { MplayersModule } from './container/mplayers/mplayers.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoteriaModuleRoutingModule,
    MbalotasModule,
    MloteriapadreModule,
    MplayersModule
  ]
})
export class LoteriaModuleModule { }
