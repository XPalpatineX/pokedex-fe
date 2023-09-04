import React from 'react';


import Header from 'components/header';
import PokemonGrid from 'components/pokemonGrid';
import PokemonPagination from 'components/pagination';
import { PokedexContainer, GridWrapper, PaginationWrapper } from './styles';

const Pokedex = () => {
  return (
    <PokedexContainer>
      <Header />
      <GridWrapper>
        <PokemonGrid />
      </GridWrapper>
      <PaginationWrapper>
        <PokemonPagination />
      </PaginationWrapper>
    </PokedexContainer>
  )
}

export default Pokedex;
