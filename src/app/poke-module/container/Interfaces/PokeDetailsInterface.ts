export interface PokeDetailsInterface {
  name:string,
  sprites: {
    [x: string]: any
    back_default:string
    back_shiny:string
    front_default:string
    front_shiny:string
  },
  stats: {
    base_stat:number,
    stat:{
      name:string
    }
  }[]
}
