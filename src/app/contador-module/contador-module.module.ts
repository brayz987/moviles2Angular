import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorModuleRoutingModule } from './contador-module-routing.module';
import { CounterComponent } from './container/counter/counter.component';
import { FooterComponent } from './container/footer/footer.component';
import { HeaderComponent } from './container/header/header.component';
import { AddComponent } from './container/add/add.component';
import { MinComponent } from './container/min/min.component';


@NgModule({
  declarations: [
    CounterComponent,
    AddComponent,
    MinComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ContadorModuleRoutingModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class ContadorModuleModule { }
