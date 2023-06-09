import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './container/profesor/profesor.component';

const routes: Routes = [{ path: '', component: ProfesorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorModuleRoutingModule {}
