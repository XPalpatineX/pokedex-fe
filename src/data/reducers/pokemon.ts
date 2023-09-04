import { EPokemonAction } from 'data/types/action.types';
import { Reducer, AnyAction } from 'redux';
import { PokemonShort, PokemonListData, Pokemon } from 'data/types/pokemon';

interface PokemonState {
  data: PokemonShort[],
  pokemon: Pokemon | null,
}

const initialState: PokemonState = {
  data: [],
  pokemon: null,
};

export const pokemonReducer: Reducer<PokemonState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case EPokemonAction.GET_ALL_POKEMON: {
      const { pokemonData }: { pokemonData: PokemonListData } = action.payload;

      return { 
        ...state,
        data: [...pokemonData.data],
      };
    }
    case EPokemonAction.GET_POKEMON: {
      const { pokemonData }: { pokemonData: Pokemon } = action.payload;

      return {
        ...state,
        pokemon: { ...pokemonData },
      };
    }
    default:
      return state
  }
}