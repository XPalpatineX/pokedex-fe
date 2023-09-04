import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from 'data/store';

import { EPokemonAction } from 'data/types/action.types';
import { EDefaultPagination, IPagination } from '../types/pokemon';
import { IErrorCallback } from '../types/common';
import { API_URL } from 'data/types/common';

export const getAllPokemon = (pagination: IPagination, error: IErrorCallback = () => {})=> async (dispatch: Dispatch): Promise<void> => {
  try {
    if (pagination.limit < EDefaultPagination.limit) pagination.limit = EDefaultPagination.limit;
    if (pagination.page < EDefaultPagination.page) pagination.page = EDefaultPagination.page;
    const queryString: string = `limit=${pagination.limit}&page=${pagination.page}`;

    const urlWithQueryParams = `${API_URL}/pokemon?${queryString}`;
    const pokemonData = await fetch(urlWithQueryParams).then((data) => data.json());

    dispatch({
      type: EPokemonAction.GET_ALL_POKEMON,
      payload: {
        pokemonData
      }
    })
  } catch (e: any) {
    error(e.message);
  }
}

export const getPokemon = (pokemonId: string | number, error: IErrorCallback = () => {}) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const urlWithQueryParams = `${API_URL}/pokemon/${pokemonId}`;
    const pokemonData = await fetch(urlWithQueryParams).then((data) => data.json());

    dispatch({
      type: EPokemonAction.GET_POKEMON,
      payload: {
        pokemonData
      }
    })
  } catch (e: any) {
    error(e.message);
  } 
}
