import { Injectable } from "@angular/core";
import { Pokemon } from "@pokemon/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as PokemonActions from './pokemon.actions';
import * as PokemonSelectors from './pokemon.selectors';
import * as fromPokemons from './pokemon.reducer';


@Injectable({
    providedIn: 'root'
})

export class PokemonFacade {
    allPokemons$ = this.store.pipe(
        map((state) => PokemonSelectors.getAllPokemons(state)),
    )
    selectedPokemons$ = this.store.pipe(select(PokemonSelectors.getSelectedPokemon));
    loaded$ = this.store.pipe(select(PokemonSelectors.getPokemonsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === PokemonActions.createPokemon({} as any) .type ||
        action.type === PokemonActions.updatePokemon({} as any) .type ||
        action.type === PokemonActions.deletePokemon({} as any) .type
        ))

        selectPokemon(pokemonId: string) {
            this.dispatch(PokemonActions.selectPokemon({ pokemonId }));
        };

        loadPokemons() {
            this.dispatch(PokemonActions.loadPokemons())
        };

        loadPokemon(pokemonId: string) {
            this.dispatch(PokemonActions.loadPokemon({ pokemonId }))
        };

        savePokemon(pokemon: Pokemon) {
            pokemon.url ? this.updatePokemon(pokemon) : this.createPokemon(pokemon)
        };

        createPokemon(pokemon: Pokemon) {
            this.dispatch(PokemonActions.createPokemon({ pokemon }))
        };

        updatePokemon(pokemon: Pokemon) {
            this.dispatch(PokemonActions.updatePokemon({ pokemon }))
        };

        deletePokemon(pokemon: Pokemon) {
            this.dispatch(PokemonActions.deletePokemon({ pokemon }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromPokemons.PokemonPartialState>,
            private actions$: ActionsSubject
        ) {}
}