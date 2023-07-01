import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CursoIO } from './CursoIO';
import { CursoI } from './CursoI';
import { SimpleModalComponent } from 'src/app/Utils/simple-modal/simple-modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoFormI } from './CursoFormI';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {
  cursos: Array<CursoI>;
  messageAlert:string = "";
  form!:FormGroup

  indexCurso!:number;
  @ViewChild('modals',{read: ViewContainerRef}) modalContainer!: ViewContainerRef;


  constructor(private formBuilder:FormBuilder) {
    this.buildForm();

    this.cursos = [
      { nombre: 'Java', descripcion: 'Curso Nivel 1', duracion: 24, costo: 15 },
      { nombre: 'Oracle', descripcion: 'Curso Nivel 1', duracion: 24, costo: 12 },
      { nombre: 'PHP', descripcion: 'Curso Nivel 1', duracion: 24, costo: 10 },
      { nombre: 'Java 2', descripcion: 'Curso Nivel 2', duracion: 48, costo: 18 },
    ];
  }

  private buildForm = () => {
    const nameRgx:RegExp = /^(([a-zA-ZÀ-ÖØ-öø-ÿ0-9]{3,60})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ0-9]*))$/;

    this.form = this.formBuilder.group<CursoFormI>({
      nombre: this.formBuilder.nonNullable.control("",[Validators.required, Validators.pattern(nameRgx)]),
      descripcion: this.formBuilder.nonNullable.control('',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      duracion: this.formBuilder.control(null,[Validators.required,Validators.max(500),Validators.min(1)]),
      costo: this.formBuilder.control(null,[Validators.required,Validators.max(500),Validators.min(1)]),
    });
  }

  cantCursos = () => this.cursos.length>0;

  regiterCurso = () => {
    let curso:CursoI = this.form.value;
    let valid = true;

    this.cursos.forEach(cursoE => {
      if (cursoE.nombre === curso.nombre) valid = false;
    });

    if(valid) this.cursos.push(curso)
    else {
        // Si existe se crea una modal con el mensaje
        this.messageAlert = `El curso ${curso.nombre} ya existe`;
        this.modalContainer.clear();
        let modal = this.modalContainer.createComponent(SimpleModalComponent);
        modal.setInput("message", this.messageAlert);
        modal.instance.closing.subscribe(() => modal.destroy());
    }
  }


  selectCurso = (curso: CursoI, index:number) => {
      // Se hace un deep copy para evitar que se actualice al array por referencia
      this.form.setValue(curso)
      this.indexCurso = index;
  }

  deleteCurso(index: number) {
    this.cursos.splice(index,1);
  }

  modifyCurso(){
    this.cursos[this.indexCurso] = JSON.parse(JSON.stringify(this.form.value));
  }


}
