import { FormControl } from "@angular/forms";

export interface ProfesorFormInterface {
    nombre:FormControl<string>;
    apellidos:FormControl<string>;
    edad:FormControl<number|null>;
    direccion:FormControl<string>;
}
