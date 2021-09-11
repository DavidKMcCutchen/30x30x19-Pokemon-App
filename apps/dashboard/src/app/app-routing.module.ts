import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, WildComponent } from "@pokemon/ui-login";
import { PokemonSubComponent } from './pokemon-sub/pokemon-sub.component';
import { PokemonsComponent } from './pokemon/pokemon.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'pokemon', component: PokemonsComponent},
  {path: 'pokemon/:id', component: PokemonSubComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
