import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokeObjectInterface } from '../Interfaces/PokeObjectInterface';
import { PokeModalComponent } from '../poke-modal/poke-modal.component';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemonList: PokeObjectInterface[] = [];

  @ViewChild('modalContainer',{read: ViewContainerRef}) modalContainer!: ViewContainerRef;

  constructor(private pokeApi: PokemonsService){}

  public getPokemons(){
    this.pokeApi.getListPokes().subscribe({
      next: (pokemons) => this.pokemonList = pokemons.results
    })
  }

  public openDetailPokemon(id:number){
    this.modalContainer.clear();
    let pokeModal = this.modalContainer.createComponent(PokeModalComponent);
    pokeModal.setInput("id",id);

  }

  ngOnInit(){
    this.getPokemons();
  }

}
