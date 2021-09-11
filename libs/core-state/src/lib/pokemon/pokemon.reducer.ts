import { Pokemon } from "@pokemon/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PokemonActions from './pokemon.actions';

export const POKEMON_FEATURE_KEY = 'pokemons';

export interface PokemonState extends EntityState<Pokemon> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface PokemonPartialState {
    readonly [POKEMON_FEATURE_KEY]: PokemonState
};

export const pokemonAdapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>({ selectId: (poke) => poke.url });

export const initialPokemonState: PokemonState = pokemonAdapter.getInitialState({
    loaded: false
});

const onFailed = (state, { error }): PokemonState => ({ ...state, error});

const onDispatch = (state, action): PokemonState => ({
    ...state,
    loaded: false,
    error: null
});

const _pokemonReducer = createReducer(
    initialPokemonState,
    on(
        PokemonActions.loadPokemonFailed,
        PokemonActions.loadPokemonsFailed,
        PokemonActions.createPokemonFailed,
        PokemonActions.updatePokemonFailed,
        PokemonActions.deletePokemonFailed,
        onFailed
    ),
    on(
        PokemonActions.loadPokemon,
        PokemonActions.loadPokemons,
        PokemonActions.createPokemon,
        PokemonActions.updatePokemon,
        PokemonActions.deletePokemon,
        onDispatch
    ),
    on(
        PokemonActions.loadPokemonSuccess, (state, { pokemon }) =>
        pokemonAdapter.upsertOne(pokemon, {...state, loaded: true})
    ),
    on(
        PokemonActions.selectPokemon, (state, { pokemonId }) => ({
            ...state,
            selectedId: pokemonId
        })
    ),
    on(
        PokemonActions.loadPokemonsSuccess, (state, { pokemons }) =>
        pokemonAdapter.setAll(pokemons, {...state, loaded: true})
    ),
    on(
        PokemonActions.deletePokemonSuccess, (state, { pokemon }) =>
        pokemonAdapter.removeOne(pokemon.id, {...state, loaded: true})
    ),
    on(
        PokemonActions.updatePokemonSuccess, (state, { pokemon }) =>
        pokemonAdapter.updateOne(
            {id: pokemon.id, changes: pokemon},
            {...state, loaded: true}
        )
    ),
    on(
        PokemonActions.createPokemonSuccess, (state, {pokemon }) =>
        pokemonAdapter.addOne(pokemon, {...state, loaded: true})
    ),
)

export function pokemonReducer(
    state: PokemonState | undefined,
    action: Action
) {
    return _pokemonReducer(state, action)
}