import { createAction, props } from "@ngrx/store";
import {  Pokemon } from "@pokemon/api-interfaces";

// Select Entity

export const selectPokemon = createAction(
    '[POKEMON] Select Pokemon',
    props<{ pokemonId: string }>()
);

// Load all Entities

export const loadPokemons = createAction(
    '[POKEMON] Load Pokemons'
);

export const loadPokemonsSuccess = createAction(
    '[POKEMON] Load Pokemons Success',
    props<{ pokemons: Pokemon[]}>()
);

export const loadPokemonsFailed = createAction(
    '[POKEMON] Load Pokemons Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadPokemon = createAction(
    '[POKEMON] Load Pokemon',
    props<{ pokemonId: string}>()
);

export const loadPokemonSuccess = createAction(
    '[POKEMON] Load Pokemon Success',
    props<{ pokemon: Pokemon}>()
);

export const loadPokemonFailed = createAction(
    '[POKEMON] Load Pokemon Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createPokemon = createAction(
    '[POKEMON] Create Pokemon',
    props<{ pokemon: Pokemon}>()
);

export const createPokemonSuccess = createAction(
    '[POKEMON] Create Pokemon Success',
    props<{ pokemon: Pokemon}>()
);

export const createPokemonFailed = createAction(
    '[POKEMON] Create Pokemon Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updatePokemon = createAction(
    '[POKEMON] Update Pokemon',
    props<{ pokemon: Pokemon}>()
);

export const updatePokemonSuccess = createAction(
    '[POKEMON] Update Pokemon Success',
    props<{ pokemon: Pokemon}>()
);

export const updatePokemonFailed = createAction(
    '[POKEMON] Create Pokemon Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deletePokemon = createAction(
    '[POKEMON] Delete Pokemon',
    props<{ pokemon: Pokemon}>()
);

export const deletePokemonSuccess = createAction(
    '[POKEMON] Delete Pokemon Success',
    props<{ pokemon: Pokemon}>()
);

export const deletePokemonFailed = createAction(
    '[POKEMON] Create Pokemon Failed',
    props<{ error: any}>()
);