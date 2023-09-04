import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'data/store';

import Header from 'components/header';
import { PokemonContainer } from './styles';
import { getPokemon } from 'data/actions/pokemon';
import DynamicImage from 'components/dynamicImage';
import { ImageWrapper } from './styles';

import PokemonDetails from 'components/pokemonDetails';

const Pokemon = () => {
  const dispatch = useAppDispatch();
  const params = useParams() as unknown as { id: string };
  
  const [pokemonId] = useState<string>(params?.id);

  useEffect(() => {
    dispatch<any>(getPokemon(pokemonId));
  }, [dispatch, pokemonId]);

  return <>
    <Header />
    <PokemonContainer>
      <ImageWrapper>
        <DynamicImage imageIndex={Number(pokemonId)} imageSize={300} />
      </ImageWrapper>
      <PokemonDetails />
    </PokemonContainer>
  </>
}

export default Pokemon;
