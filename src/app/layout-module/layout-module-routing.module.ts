import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosLayoutComponent } from './layout/cursos-layout/cursos-layout.component';
import { LoteriaLayoutComponent } from './layout/loteria-layout/loteria-layout.component';
import { ProfesoresLayoutComponent } from './layout/profesores-layout/profesores-layout.component';
import { NotasLayoutComponent } from './layout/notas-layout/notas-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  {
    path: '',
    component: CursosLayoutComponent,
    children: [
      {
        path: 'cursos',
        loadChildren: () =>
          import('../cursos-module/cursos-module.module').then(
            (module) => module.CursosModuleModule
          ),
      },
      {
        path: 'contador',
        loadChildren: () =>
          import('../contador-module/contador-module.module').then(
            (module) => module.ContadorModuleModule
          ),
      },
      {
        path: 'pokemon',
        loadChildren: () =>
          import('../poke-module/poke-module.module').then(
            (module) => module.PokeModuleModule
          ),
      },
      {
        path: 'capacitorTest',
        loadChildren: () =>
          import('../capacitor-module/capacitor-module.module').then(
            module => module.CapacitorModuleModule
          )
      }
    ],
  },
  {
    path: '',
    component: ProfesoresLayoutComponent,
    children: [
      {
        path: 'profesores',
        loadChildren: () =>
          import('../profesor-module/profesor-module.module').then(
            (module) => module.ProfesorModuleModule
          ),
      },
    ],
  },
  {
    path: '',
    component: NotasLayoutComponent,
    children: [
      {
        path: 'notas',
        loadChildren: () =>
          import('../notas-module/notas-module.module').then(
            (module) => module.NotasModuleModule
          ),
      },
    ],
  },

  {
    path: '',
    component: LoteriaLayoutComponent,
    children: [
      {
        path: 'loteria',
        loadChildren: () =>
          import('../loteria-module/loteria-module.module').then(
            (module) => module.LoteriaModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutModuleRoutingModule {}
