import { createSelector } from 'reselect';
import { AppState } from 'data/store';

const getAllPokemonSelector = (state: AppState) => state.pokemon.data;
export const allPokemonSelector = createSelector(
  getAllPokemonSelector,
  (allPokemon) => allPokemon,
);


const getPokemonSelector = (state: AppState) => state.pokemon.pokemon;
export const pokemonNameSelector = createSelector(
  getPokemonSelector,
  (pokemon) => pokemon?.name ? `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}` : '',
);

export const pokemonStatsSelector = createSelector(
  getPokemonSelector,
  (pokemon) => {
    const pokemonStats = pokemon?.stats ?? [];
    const name = pokemon?.name ? `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}` : '';
    return {
      name,
      types: (pokemon?.types ?? []).map((type) => type?.type?.name),
      height: pokemon?.height,
      weight: pokemon?.weight,
      hp: pokemonStats.find((stat) => stat.stat.name === 'hp')?.base_stat,
      attack: pokemonStats.find((stat) => stat.stat.name === 'attack')?.base_stat,
      defense: pokemonStats.find((stat) => stat.stat.name === 'defense')?.base_stat,
    }


  }
)