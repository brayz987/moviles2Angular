import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { NotasComponent } from './notas/notas.component';
import { CursosComponent } from './cursos/cursos.component';
import { CounterComponent } from './contador/counter/counter.component';
import { LoteriaCComponent } from './loteria/mloteriapadre/loteria-c/loteria-c.component';

const routes: Routes = [
  { path: 'profesores', component: ProfesorComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'contador', component: CounterComponent },
  { path: 'loteria', component: LoteriaCComponent },
  { path: '', component: CursosComponent } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
