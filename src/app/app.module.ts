import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { NotasComponent } from './notas/notas.component';
import { CursosComponent } from './cursos/cursos.component';
import { CounterComponent } from './contador/counter/counter.component';
import { AddComponent } from './contador/counter/add/add.component';
import { MinComponent } from './contador/counter/min/min.component';
import { BalotaComponent } from './loteria/balota/balota.component';
import { LoteriaCComponent } from './loteria/loteria-c/loteria-c.component';
import { PlayersComponent } from './loteria/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfesorComponent,
    SimpleModalComponent,
    NotasComponent,
    CursosComponent,
    CounterComponent,
    AddComponent,
    MinComponent,
    BalotaComponent,
    LoteriaCComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
