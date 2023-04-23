import { Component } from '@angular/core';
import { Curso } from './Curso';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  private listCurso: string[];
  private miCurso: Curso = new Curso();
  private respuesta: string;

  public nombre:string= "";
  public edad:string= "";
  public direccion:string= "";
  public cursoSelected:number = 0;

  public constructor(){
    this.listCurso = this.miCurso.getCurso();
    this.respuesta = "";
  }

  public getListCursos():string[]{
    return this.listCurso;
  }

  public getAnswer():string{
    return this.respuesta;
  }

  public getInscribir(){
    this.miCurso.inscribir(this.nombre,this.edad,this.listCurso[this.cursoSelected],this.direccion);
    this.respuesta = this.miCurso.getRespuesta();
    console.log(this.cursoSelected);
    console.log(this.respuesta );

  }
}
