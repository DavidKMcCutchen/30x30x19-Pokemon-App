import { Pokemon } from "./pokemon.model";

export interface PokemonPagination {
  count: number;
  next?: string;
  previous?: boolean;
  results: Pokemon[];
}