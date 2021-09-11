import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Pokemon, PokemonPagination } from "@pokemon/api-interfaces";
import { Observable } from 'rxjs';


const BASE_URL = 'https://pokeapi.co/api/v2/';
const MODEL = 'pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private httpClient: HttpClient,
  ) {}

getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<PokemonPagination>(this.getUrl()).pipe(
      map((response) => response.results)
    );
  };

  getOne(id: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
