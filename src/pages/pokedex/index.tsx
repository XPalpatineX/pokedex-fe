import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'data/store';

import Header from 'components/header';
import PokemonGrid from 'components/pokemonGrid';
import PokemonPagination from 'components/pagination';
import { PokedexContainer, GridWrapper, PaginationWrapper } from './styles';

import { getAllPokemon } from 'data/actions/pokemon';
import { EDefaultPagination, QueryPagination } from 'data/types/pokemon';

const Pokedex = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const parsedSearch = queryString.parse(location.search) as unknown as QueryPagination;

  const [page, setPage] = useState(Number(parsedSearch.page) || EDefaultPagination.page);
  const [limit] = useState(Number(parsedSearch.limit) || EDefaultPagination.limit);

  useEffect(() => {
    dispatch<any>(getAllPokemon({ page, limit }, (errorMessage) => {
      console.log(errorMessage)
    }));
    navigate({ pathname: '/pokemon', search: `?limit=${limit}&page=${page}` })
  }, [dispatch, limit, page, navigate]);

  return (
    <PokedexContainer>
      <Header />
      <GridWrapper>
        <PokemonGrid />
      </GridWrapper>
      <PaginationWrapper>
        <PokemonPagination page={page} setPage={setPage} limit={limit} />
      </PaginationWrapper>
    </PokedexContainer>
  )
}

export default Pokedex;
