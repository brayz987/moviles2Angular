import { Component } from '@angular/core';
import { PlayerIO } from '../PlayerIO';

@Component({
  selector: 'app-loteria-c',
  templateUrl: './loteria-c.component.html',
  styleUrls: ['./loteria-c.component.scss']
})
export class LoteriaCComponent {
  numbers: number[];
  numberWin: string;
  winners:PlayerIO[] = [];

  constructor(){
    this.numbers = [0,0,0,0,0];
    this.numberWin = "";
  }


  getNumberPlaying():number{
    let myNumber : number;
    myNumber = (Math.trunc(Math.random() * 9) - 1) + 1;
    return (myNumber < 0) ? 0 : myNumber;
  }

  playLotery():void{
    this.numbers = this.numbers.map(() => {
      return this.getNumberPlaying()
    })
    this.numberWin = "";
    this.numbers.forEach(e => {
      this.numberWin += e;
    });
  }

  setWinners(winnersEvent:PlayerIO[]){
    this.winners = winnersEvent;
  }


  winnersLenght():boolean{
    return this.winners.length > 0;
  }
}
