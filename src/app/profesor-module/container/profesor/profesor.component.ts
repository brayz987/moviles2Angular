import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfesorOInterface } from './ProfesorOInterface';
import { ProfesorInterface } from './ProfesorInterface';
import { SimpleModalComponent } from 'src/app/Utils/simple-modal/simple-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesorFormInterface } from './ProfesorFormInterface';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],
})
export class ProfesorComponent {
  form!:FormGroup;
  profesores!: Array<any | object>;
  indexProfe:number = 0;
  messageAlert : string = "";
  modal!: ComponentRef<SimpleModalComponent>;

  @ViewChild('modals',{read: ViewContainerRef}) modalContainer!: ViewContainerRef;

  constructor(private formBuilder:FormBuilder) {

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

    this.buildForm()
  }

  private buildForm = () => {

    const nameRgx:RegExp = /^(([a-zA-ZÀ-ÖØ-öø-ÿ]{3,60})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]*))$/;

    this.form = this.formBuilder.group<ProfesorFormInterface>({
      nombre: this.formBuilder.nonNullable.control("",[Validators.required, Validators.pattern(nameRgx)]),
      apellidos: this.formBuilder.nonNullable.control("",[Validators.required, Validators.pattern(nameRgx)]),
      edad: this.formBuilder.control(null,[Validators.required, Validators.min(18), Validators.max(70)]),
      direccion: this.formBuilder.nonNullable.control("",[Validators.required, Validators.maxLength(150), Validators.minLength(10)]),
    })
  }

  cantProfes() {
    return Object.entries(this.profesores).length;
  }

  selectProfe(profe: ProfesorInterface, index:number) {
    // Se hace un deep copy para evitar que se actualice al tiempo el array
    this.form?.setValue(profe)
    this.indexProfe = index;
  }

  borrarProfe(index: number) {
    this.profesores.splice(index,1);
  }

  registrarProfesor() {
    let valido = true;
    let profesor:ProfesorInterface = this.form?.value
    this.profesores.forEach((objProfesor: ProfesorInterface) => {
      // Se valida si ya existe el profesor
      if(objProfesor.nombre == profesor.nombre) valido = false;
    });

    if (valido) this.profesores.push(profesor);
    else {
      // Si existe se crea una modal con el mensaje
      this.messageAlert = `El profesor ${profesor.nombre} ya existe`;
      this.modalContainer.clear();
      let modal = this.modalContainer.createComponent(SimpleModalComponent);
      modal.setInput("message", this.messageAlert);
      modal.instance.closing.subscribe(() => modal.destroy());
    }
  }

  modificarProfe(){
    this.profesores[this.indexProfe] = JSON.parse(JSON.stringify(this.form?.value));
  }
}
