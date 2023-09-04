export interface IPagination {
  limit: number;
  page: number;
}

export enum EDefaultPagination {
  limit = 20,
  page = 1,
}

export interface QueryPagination {
  limit: string;
  page: string;
}

export interface PokemonShort {
  name: string;
  url: string;
}

export interface PokemonListData extends IPagination {
  data: PokemonShort[]
}