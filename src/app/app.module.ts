import { NgModule, isDevMode } from '@angular/core';
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
import { MloteriapadreModule } from './loteria/mloteriapadre/mloteriapadre.module';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    MinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MloteriapadreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
