export interface Pokemon {
  id: string;
  name: string;
  url: string;
  base_experience: string;
  height: string;
  weight: string;
};

export const emptyPokemon = {
  id: '',
  name: '',
  url: '',
  base_experience: '',
  height: '',
  weight: ''
}

export interface User {
  email: string,
  password: string
}
