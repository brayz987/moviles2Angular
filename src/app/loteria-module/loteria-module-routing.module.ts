import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoteriaCComponent } from './container/mloteriapadre/loteria-c/loteria-c.component';

const routes: Routes = [{path: "", component: LoteriaCComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteriaModuleRoutingModule { }
