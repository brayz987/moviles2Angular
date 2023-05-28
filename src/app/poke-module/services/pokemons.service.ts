import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { PokeListInterface } from '../container/Interfaces/PokeListInterface';
import { PokeDetailsInterface } from '../container/Interfaces/PokeDetailsInterface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  URL_BASE = "https://pokeapi.co/api/v2/";

  private header:HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'aplication/json; charset=uft-8')
    .set('Accept', 'aplication/json');


  private options:Object = {
    headers: this.header
  }

  constructor(private http: HttpClient) { }


  public getListPokes(){
    return this.http.get<PokeListInterface>(this.URL_BASE+"pokemon?limit=20&offset=0", this.options);
  }

  public getPokeDetail(id:number){
    return this.http.get<PokeDetailsInterface>(this.URL_BASE+`pokemon/${id}`, this.options);
  }
}
