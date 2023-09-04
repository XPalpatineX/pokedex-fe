import { createSelector } from 'reselect';
import { AppState } from 'data/store';

const getAllPokemonSelector = (state: AppState) => state.pokemon.data;
export const allPokemonSelector = createSelector(
  getAllPokemonSelector,
  (allPokemon) => allPokemon,
);
