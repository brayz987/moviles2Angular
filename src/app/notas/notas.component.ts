import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent {

  nota: number;
  nombre: string;
  edad: number;
  promedio!: number;
  notas: number[];

  constructor(){
    this.nota = 5;
    this.nombre = "Pedro";
    this.edad = 23,
    this.notas = [5,3,7,9,10];
  }

  calcularPromedio(){
    let totalSum = 0;
    this.notas.forEach(nota => {
      totalSum += nota;
    });

    this.promedio = totalSum / this.notas.length;
    console.log(this.promedio);
  }
}
