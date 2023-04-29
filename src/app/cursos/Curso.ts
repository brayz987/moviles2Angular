
    // ESTA CLASE YA NO SE USA

export class Curso {

    private curso: string[];
    private repuesta: string;

    constructor(){
        this.curso = ['Java1','Java2','Oracle','PHP1','PHP2','Javascript','TypeScript'];
        this.repuesta = "";
    }


    public getCurso():string[] {
        return this.curso;
    }

    public getRespuesta():string {
        return this.repuesta;
    }

    public inscribir(nombre:string, edad:string, curso:string, direccion: string){
        this.repuesta = `Se ha inscrito al curso: ${curso}, Estudiante: ${nombre} edad: ${edad} direccion: ${direccion}`;
    }
}