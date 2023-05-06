import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayerIO } from '../PlayerIO';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
  players: PlayerIO[];
  _winnerNumber: string = "";

  // En el input se genera un setter para poder el metodo de validacion
  @Input() set winnerNumber(val:string){
    this._winnerNumber = val;
    this.validWinner();
  };


  @Output() winnerEvent: EventEmitter<PlayerIO[]> = new EventEmitter();

  constructor() {
    this.players = [
      { name: 'Yolanda', lastName: 'Saez', playedNumber: '84546' },
      { name: 'Jaime', lastName: 'Lozano', playedNumber: '16761' },
      { name: 'María', lastName: 'Concepción Velasco', playedNumber: '76778' },
      { name: 'Maria', lastName: 'Teresa', playedNumber: '98649' },
      { name: 'Juana', lastName: 'Alvarez', playedNumber: '72530' },
      { name: 'Ainhoa', lastName: 'Vicente', playedNumber: '51900' },
      { name: 'Gloria', lastName: 'Vega', playedNumber: '84772' },
      { name: 'Pablo', lastName: 'Herrero', playedNumber: '83433' },
      { name: 'Jorge', lastName: 'Delgado', playedNumber: '60171' },
      { name: 'Mónica', lastName: 'Hernandez', playedNumber: '86919' },
      { name: 'Luis', lastName: 'Suarez', playedNumber: '46317' },
      { name: 'María', lastName: 'Sanchez', playedNumber: '36515' },
      { name: 'Oscar', lastName: 'Lopez', playedNumber: '81188' },
      { name: 'Martin', lastName: 'Benitez', playedNumber: '77582' },
      { name: 'Amparo', lastName: 'Martin', playedNumber: '87789' },
      { name: 'Roberto', lastName: 'Peña', playedNumber: '58325' },
      { name: 'Enrique', lastName: 'Calvo', playedNumber: '52218' },
      { name: 'María', lastName: 'Vicente', playedNumber: '79892' },
      { name: 'Noelia', lastName: 'Morales', playedNumber: '75568' },
      { name: 'Ana', lastName: 'Santos', playedNumber: '27760' },
      { name: 'Mariano', lastName: 'Vidal', playedNumber: '66733' },
      { name: 'Claudia', lastName: 'Dominguez', playedNumber: '375906' },
      { name: 'Javier', lastName: 'Vazquez', playedNumber: '71522' },
      { name: 'Natalia', lastName: 'Sanz', playedNumber: '11475' },
      { name: 'Alejandra', lastName: 'Peña', playedNumber: '71966' },
      { name: 'Alvaro', lastName: 'Lorenzo', playedNumber: '48409' },
      { name: 'Olga', lastName: 'Aguilar', playedNumber: '81072' },
      { name: 'Rafael', lastName: 'Ferrer', playedNumber: '98099' },
      { name: 'Silvia', lastName: 'Suarez', playedNumber: '97372' },
    ];
  }


  validWinner(){
    let winners: PlayerIO[] = this.players.filter((player) => parseInt(player.playedNumber) == parseInt(this._winnerNumber));
    this.winnerEvent.emit(winners);
    
  }
}
