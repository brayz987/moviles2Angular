import { FormControl } from "@angular/forms";

export interface CursoFormI {
    nombre:FormControl<string>;
    descripcion:FormControl<string>;
    duracion:FormControl<number|null>;
    costo:FormControl<number|null>;
}
