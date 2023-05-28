import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './container/poke-list/poke-list.component';

const routes: Routes = [
  {path: '', component: PokeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeModuleRoutingModule { }
