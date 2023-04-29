import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfesorOInterface } from './ProfesorOInterface';
import { ProfesorInterface } from './ProfesorInterface';
import { SimpleModalComponent } from '../simple-modal/simple-modal.component';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],
})
export class ProfesorComponent implements ProfesorOInterface {
  profesor!: {
    nombre: string;
    apellidos: string;
    edad: number;
    direccion: string;
  };
  profesores!: Array<any | object>;
  indexProfe:number = 0;
  messageAlert : string = "";
  modal!: ComponentRef<SimpleModalComponent>;

  @ViewChild('modals',{read: ViewContainerRef}) modalContainer!: ViewContainerRef;

  constructor() {
    this.profesor = {
      nombre: '',
      apellidos: '',
      edad: 0,
      direccion: '',
    };

    this.profesores = [
      {
        nombre: 'Andres Enrrique',
        apellidos: 'Suarez Verdulli',
        edad: 46,
        direccion: 'las palmas',
      },
      {
        nombre: 'Paola Andrea',
        apellidos: 'Perez',
        edad: 35,
        direccion: 'la castellana',
      },
      {
        nombre: 'Carla Lisbeth',
        apellidos: 'Muñoz Velez',
        edad: 41,
        direccion: 'el dorado',
      },
    ];
  }

  cantProfes() {
    return Object.entries(this.profesores).length;
  }

  selectProfe(profe: ProfesorInterface, index:number) {
    // Se hace un deep copy para evitar que se actualice al tiempo el array
    this.profesor = JSON.parse(JSON.stringify(profe));
    this.indexProfe = index;
  }

  borrarProfe(index: number) {
    this.profesores.splice(index,1);
  }

  registrarProfesor() {
    let valido = true;
    this.profesores.forEach((objProfesor: ProfesorInterface) => {
      // Se valida si ya existe el profesor
      if(objProfesor.nombre == this.profesor.nombre) valido = false;
    });

    if (valido) this.profesores.push(this.profesor);
    else {
      // Si existe se crea una modal con el mensaje
      this.messageAlert = `El profesor ${this.profesor.nombre} ya existe`;
      this.modalContainer.clear();
      let modal = this.modalContainer.createComponent(SimpleModalComponent);
      modal.setInput("message", this.messageAlert);
      modal.instance.closing.subscribe(() => modal.destroy());
    }
  }

  modificarProfe(){
    this.profesores[this.indexProfe] = JSON.parse(JSON.stringify(this.profesor));
  }
}
