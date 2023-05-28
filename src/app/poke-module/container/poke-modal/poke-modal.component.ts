import { AfterViewInit, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Context } from '@popperjs/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokeDetailsInterface } from '../Interfaces/PokeDetailsInterface';

@Component({
  selector: 'app-poke-modal',
  templateUrl: './poke-modal.component.html',
  styleUrls: ['./poke-modal.component.scss']
})
export class PokeModalComponent  implements AfterViewInit {

  @ViewChild('content') public content!: TemplateRef<Context>;

  @Input('id') private id!:number;


  public pokeData:PokeDetailsInterface = {
    sprites: {
      back_default: "",
      back_shiny: "",
      front_default: "",
      front_shiny: ""
    },
    stats: [],
    name: ''
  }

  public spriteMap:string[] = [];


  constructor(private modalService: NgbModal, private pokeApi: PokemonsService){}

  ngAfterViewInit(): void {
    this.getInfoPokemon();
    this.open(this.content);
  }

  public open(content: TemplateRef<Context>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',size: 'lg' })
	}

  getInfoPokemon(){
    this.pokeApi.getPokeDetail(this.id).subscribe({
      next: pokeInfo => {
        this.pokeData = pokeInfo;
      }
    })
  }
}
