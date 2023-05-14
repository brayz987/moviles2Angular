import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoteriaCComponent } from './loteria-c/loteria-c.component';
import { MplayersModule } from "../mplayers/mplayers.module";
import { MbalotasModule } from "../mbalotas/mbalotas.module";



@NgModule({
    exports: [LoteriaCComponent],
    declarations: [LoteriaCComponent],
    imports: [
        CommonModule,
        MplayersModule,
        MbalotasModule
    ]
})
export class MloteriapadreModule { }
