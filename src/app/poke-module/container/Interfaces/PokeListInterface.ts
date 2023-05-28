import { PokeObjectInterface } from "./PokeObjectInterface";

export interface PokeListInterface {
  count:number,
  next:string|null,
  previous:string|null,
  results:PokeObjectInterface[]
}
