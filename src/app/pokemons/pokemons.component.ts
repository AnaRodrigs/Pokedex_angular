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

  constructor (private service: PokemonService) {

  }
  ngOnInit(): void {
   this.loadPokemon();
  }
    
    loadPokemon () {
      this.service.getPokemons().subscribe (
        {
          next : data => {
            this.pokemon = data;
          }
        }
      )
    }
  }