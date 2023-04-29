import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { NotasComponent } from './notas/notas.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: 'profesores', component: ProfesorComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'notas', component: NotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
