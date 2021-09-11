import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Pokemon, emptyPokemon } from '@pokemon/api-interfaces';
import { PokemonFacade } from '@pokemon/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'pokemon-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonsComponent implements OnInit {
  allPokemons$: Observable<Pokemon[]> = this.pokemonFacade.allPokemons$;
  selectedPokemon$: Observable<Pokemon> = this.pokemonFacade.selectedPokemons$;

  form: FormGroup;

  constructor(
    private pokemonFacade: PokemonFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.pokemonFacade.mutations$.subscribe((_) => this.resetPokemon());
  }

  ngOnInit() {
    this.initForm();
    this.pokemonFacade.loadPokemons();
    this.resetPokemon()

    const pokemonRouteId = this.route.snapshot.params['id'];

    if (pokemonRouteId) {
      this.loadPokemon((pokemonRouteId))
    }
  }

  viewPokemon(pokemonId: string) {
    this.router.navigate(["pokemons", pokemonId])
  }

  loadPokemon(pokemonId: string) {
    this.pokemonFacade.selectPokemon(pokemonId);
    this.pokemonFacade.loadPokemon(pokemonId);
  }

  selectPokemon(pokemon: Pokemon) {
    this.pokemonFacade.selectPokemon(pokemon.id)
    this.form.patchValue(pokemon);
  }

  savePokemon(pokemon: Pokemon) {
    this.pokemonFacade.savePokemon(pokemon);
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonFacade.deletePokemon(pokemon);
  }

  resetPokemon() {
    this.form.reset();
    this.selectPokemon(emptyPokemon)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      url: [''],
    })
  }
}
