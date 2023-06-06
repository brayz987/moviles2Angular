import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacitorModuleRoutingModule } from './capacitor-module-routing.module';
import { BaseComponent } from './container/base/base.component';
import { PhotoComponent } from './container/photo/photo.component';
import { GeolocationComponent } from './container/geolocation/geolocation.component';
import { ScannerComponent } from './container/scanner/scanner.component';


@NgModule({
  declarations: [
    BaseComponent,
    PhotoComponent,
    GeolocationComponent,
    ScannerComponent
  ],
  imports: [
    CommonModule,
    CapacitorModuleRoutingModule
  ]
})
export class CapacitorModuleModule { }
