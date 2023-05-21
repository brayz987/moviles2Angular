import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CursoIO } from './CursoIO';
import { CursoI } from './CursoI';
import { SimpleModalComponent } from 'src/app/Utils/simple-modal/simple-modal.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements CursoIO {
  curso: CursoI;
  cursos: Array<CursoI>;
  messageAlert:string = "";

  indexCurso!:number;
  modal!: ComponentRef<SimpleModalComponent>;
  @ViewChild('modals',{read: ViewContainerRef}) modalContainer!: ViewContainerRef;


  constructor() {
    this.curso = {
      nombre: '',
      descripcion: '',
      duracion: 0,
      costo: 0,
    };

    this.cursos = [
      { nombre: 'Java', descripcion: 'Curso Nivel 1', duracion: 24, costo: 15 },
      { nombre: 'Oracle', descripcion: 'Curso Nivel 1', duracion: 24, costo: 12 },
      { nombre: 'PHP', descripcion: 'Curso Nivel 1', duracion: 24, costo: 10 },
      { nombre: 'Java 2', descripcion: 'Curso Nivel 2', duracion: 48, costo: 18 },
    ];
  }

  cantCursos = () => this.cursos.length>0;

  regiterCurso = () => {
    let valid = true;

    this.cursos.forEach(cursoE => {
      if (cursoE.nombre === this.curso.nombre) valid = false;
    });

    if(valid) this.cursos.push(this.curso)
    else {
        // Si existe se crea una modal con el mensaje
        this.messageAlert = `El curso ${this.curso.nombre} ya existe`;
        this.modalContainer.clear();
        let modal = this.modalContainer.createComponent(SimpleModalComponent);
        modal.setInput("message", this.messageAlert);
        modal.instance.closing.subscribe(() => modal.destroy());
    }
  }


  selectCurso = (curso: CursoI, index:number) => {
      // Se hace un deep copy para evitar que se actualice al array por referencia
      this.curso = JSON.parse(JSON.stringify(curso));
      this.indexCurso = index;
  }

  deleteCurso(index: number) {
    this.cursos.splice(index,1);
  }

  modifyCurso(){
    this.cursos[this.indexCurso] = JSON.parse(JSON.stringify(this.curso));
  }

  
}
