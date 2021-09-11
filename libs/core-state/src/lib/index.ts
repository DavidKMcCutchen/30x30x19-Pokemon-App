import { ActionReducerMap } from "@ngrx/store";
import * as fromPokemon from './pokemon/pokemon.reducer';

export interface AppState {
    [fromPokemon.POKEMON_FEATURE_KEY]: fromPokemon.PokemonState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromPokemon.POKEMON_FEATURE_KEY]: fromPokemon.pokemonReducer
};