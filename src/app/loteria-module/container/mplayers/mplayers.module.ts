import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';



@NgModule({
  exports: [PlayersComponent],
  declarations: [PlayersComponent],
  imports: [
    CommonModule
  ]
})
export class MplayersModule { }
