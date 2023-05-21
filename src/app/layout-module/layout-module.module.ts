import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModuleRoutingModule } from './layout-module-routing.module';
import { CursosLayoutComponent } from './layout/cursos-layout/cursos-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfesoresLayoutComponent } from './layout/profesores-layout/profesores-layout.component';
import { NotasLayoutComponent } from './layout/notas-layout/notas-layout.component';
import { LoteriaLayoutComponent } from './layout/loteria-layout/loteria-layout.component';


@NgModule({
  declarations: [CursosLayoutComponent, HeaderComponent, FooterComponent, ProfesoresLayoutComponent, NotasLayoutComponent, LoteriaLayoutComponent],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule
  ]
})
export class LayoutModuleModule { }
