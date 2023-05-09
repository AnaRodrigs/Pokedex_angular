import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent  implements OnInit{
  pokemon : Pokemon = {} as Pokemon ;
  id: number = 1;

  constructor (private service: PokemonService) {

  }
  ngOnInit(): void {
   this.loadPokemon();

  }

    loadPokemon () {
      this.service.getPokemons(this.id).subscribe (
        {
          next : data => {
             this.pokemon = data;
          }
        }
      );
    }

    imagem(): string {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
    }

    next(){
      if(this.id < 1008){
        this.id ++;
      }
      else{
        this.id = 1;
      }

      this.loadPokemon();
    }


   prev()
  {
    if(this.id > 1){
      this.id --;
    }
    else{
      this.id = 1008;
    }

    this.loadPokemon();
  }

  getName() : string {
    return this.pokemon.name;
  }

  getAltura() : number {
    return this.pokemon.height;
  }

  getPeso() : number {
    return this.pokemon.weight;
  }

  }

