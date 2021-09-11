import { emptyPokemon } from "@pokemon/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { pokemonAdapter, PokemonState, POKEMON_FEATURE_KEY } from "./pokemon.reducer";

export const getPokemonState = createFeatureSelector<PokemonState>(POKEMON_FEATURE_KEY);

const { selectAll, selectEntities } = pokemonAdapter.getSelectors();

export const getPokemonsLoaded = createSelector(
    getPokemonState,
    (state: PokemonState) => state.loaded
);

export const getPokemonError = createSelector(
    getPokemonState,
    (state: PokemonState) => state.error
);

export const getAllPokemons = createSelector(
    getPokemonState,
    (state: PokemonState) => selectAll(state)
);

export const getPokemonEntities = createSelector(
    getPokemonState,
    (state: PokemonState) => selectEntities(state)
);

export const getSelectedPokemonId = createSelector(
    getPokemonState,
    (state: PokemonState) => state.selectedId
);

export const getSelectedPokemon = createSelector(
    getPokemonEntities,
    getSelectedPokemonId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyPokemon
);