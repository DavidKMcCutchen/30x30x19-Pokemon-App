import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@pokemon/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@pokemon/core-data";
import { CoreStateModule } from "@pokemon/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@pokemon/environment';
import { UiLoginModule } from '@pokemon/ui-login';
import { PokemonsComponent } from './pokemon/pokemon.component';
import { PokemonSubComponent } from './pokemon-sub/pokemon-sub.component';
import { PokemonInfoComponent } from './pokemon-sub/pokemon-info/pokemon-info.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';



@NgModule({
  declarations: [AppComponent, PokemonsComponent, PokemonDetailsComponent, PokemonListComponent, PokemonInfoComponent, PokemonSubComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}