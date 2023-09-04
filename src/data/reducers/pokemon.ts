import { EPokemonAction } from 'data/types/action.types';
import { Reducer, AnyAction } from 'redux';
import { PokemonShort, PokemonListData } from 'data/types/pokemon';

export interface PokemonState {
  data: PokemonShort[],
  pokemon: any,
}

const initialState: PokemonState = {
  data: [],
  pokemon: null,
};

export const pokemonReducer: Reducer<PokemonState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case EPokemonAction.GET_ALL_POKEMON:
      const { pokemonData }: { pokemonData: PokemonListData } = action.payload;

      return { 
        ...state,
        data: [...pokemonData.data],
      };
    default:
      return state
  }
}