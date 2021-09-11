import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from "@pokemon/api-interfaces";


@Component({
  selector: 'pokemon-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() pokemonViewed = new EventEmitter();
}
