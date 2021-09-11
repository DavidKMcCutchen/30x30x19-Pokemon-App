import { Injectable } from '@angular/core';
import { NotificationsService } from '@pokemon/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as PokemonsActions from './pokemon.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PokemonsActions.createPokemonSuccess),
        tap(() => this.notificationService.notify('Create Pokemon Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PokemonsActions.updatePokemonSuccess),
        tap(() => this.notificationService.notify('Update Pokemon Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PokemonsActions.deletePokemonSuccess),
        tap(() => this.notificationService.notify('Delete Pokemon Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
