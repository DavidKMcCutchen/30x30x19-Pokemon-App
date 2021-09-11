import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Pokemon } from "@pokemon/api-interfaces";
import { PokemonsService } from "@pokemon/core-data";
import * as PokemonActions from './pokemon.actions';
import { map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Observable, pipe, UnaryFunction } from "rxjs";

const streamLogger = (): UnaryFunction<Observable<any>, Observable<any>> => pipe(
    tap(
        (res) => console.log(`Next: `, res),
        (err) => console.log(`Err: `, err),
        () => console.log('completed')
    )
);

@Injectable()
export class PokemonEffects{
    loadPokemon$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonActions.loadPokemon),
            fetch({
                run: (action) =>
                    this.pokemonsService
                        .getOne(action.pokemonId)
                        .pipe(map((pokemon: Pokemon) => PokemonActions.loadPokemonSuccess({ pokemon }))),
                    onError: (action, error) => PokemonActions.loadPokemonFailed({ error })    
            })
        ));
    loadPokemons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonActions.loadPokemons),
            fetch({
                run: () =>
                    this.pokemonsService
                    .getAll()
                    .pipe(
                        map((pokemons: Pokemon[]) => PokemonActions.loadPokemonsSuccess({ pokemons }))
                    ),
                onError: (action, error) => PokemonActions.loadPokemonsFailed({ error })    
            })
        ));
    //     createPokemon$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(PokemonActions.createPokemon),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.pokemonsService
    //                     .create(action.pokemon)
    //                     .pipe(map((pokemon: Pokemon) => PokemonActions.createPokemonSuccess({ pokemon }))),
    //                 onError: (action, error) => PokemonActions.createPokemonFailed({ error })    
    //         })
    // ));

    // updatePokemon$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(PokemonActions.updatePokemon),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.pokemonsService
    //                     .update(action.pokemon)
    //                     .pipe(map((pokemon: Pokemon) => PokemonActions.updatePokemonSuccess({ pokemon}))),
    //                 onError: (action, error) => PokemonActions.updatePokemonFailed({ error })    
    //         })
    // ));

    // deletePokemon$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(PokemonActions.deletePokemon),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.pokemonsService
    //                     .delete(action.pokemon)
    //                     .pipe(
    //                         map(() => PokemonActions.deletePokemonSuccess({ pokemon: action.pokemon }))
    //                     ),
    //                 onError: (action, error) => PokemonActions.deletePokemonFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private pokemonsService: PokemonsService
    ) {}    
}