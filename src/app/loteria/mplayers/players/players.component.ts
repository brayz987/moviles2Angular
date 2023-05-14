import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayerIO } from '../../PlayerIO';

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
      { name: 'Yolanda', lastName: 'Saez', playedNumber: '84' },
      { name: 'Jaime', lastName: 'Lozano', playedNumber: '16' },
      { name: 'María', lastName: 'Concepción Velasco', playedNumber: '76' },
      { name: 'Maria', lastName: 'Teresa', playedNumber: '98' },
      { name: 'Juana', lastName: 'Alvarez', playedNumber: '72' },
      { name: 'Ainhoa', lastName: 'Vicente', playedNumber: '51' },
      { name: 'Gloria', lastName: 'Vega', playedNumber: '84' },
      { name: 'Pablo', lastName: 'Herrero', playedNumber: '83' },
      { name: 'Jorge', lastName: 'Delgado', playedNumber: '60' },
      { name: 'Mónica', lastName: 'Hernandez', playedNumber: '86' },
      { name: 'Luis', lastName: 'Suarez', playedNumber: '46' },
      { name: 'María', lastName: 'Sanchez', playedNumber: '36' },
      { name: 'Oscar', lastName: 'Lopez', playedNumber: '88' },
      { name: 'Martin', lastName: 'Benitez', playedNumber: '77' },
      { name: 'Amparo', lastName: 'Martin', playedNumber: '87' },
      { name: 'Roberto', lastName: 'Peña', playedNumber: '58' },
      { name: 'Enrique', lastName: 'Calvo', playedNumber: '52' },
      { name: 'María', lastName: 'Vicente', playedNumber: '79' },
      { name: 'Noelia', lastName: 'Morales', playedNumber: '75' },
      { name: 'Ana', lastName: 'Santos', playedNumber: '27' },
      { name: 'Mariano', lastName: 'Vidal', playedNumber: '66' },
      { name: 'Claudia', lastName: 'Dominguez', playedNumber: '37' },
      { name: 'Javier', lastName: 'Vazquez', playedNumber: '71' },
      { name: 'Natalia', lastName: 'Sanz', playedNumber: '11' },
      { name: 'Alejandra', lastName: 'Peña', playedNumber: '71' },
      { name: 'Alvaro', lastName: 'Lorenzo', playedNumber: '48' },
      { name: 'Olga', lastName: 'Aguilar', playedNumber: '81' },
      { name: 'Rafael', lastName: 'Ferrer', playedNumber: '98' },
      { name: 'Silvia', lastName: 'Suarez', playedNumber: '97' },
    ];
  }


  validWinner(){
    let winners: PlayerIO[] = this.players.filter((player) => parseInt(player.playedNumber) == parseInt(this._winnerNumber));
    this.winnerEvent.emit(winners);
    
  }
}
