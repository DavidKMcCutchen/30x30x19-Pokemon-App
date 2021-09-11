import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMON_ENVIRONMENT } from './pokemon.token';
import { PokemonEnvironment } from "./pokemon.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: PokemonEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: POKEMON_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
