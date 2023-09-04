import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { useAppSelector } from 'data/store';
import { allPokemonSelector } from 'data/selectors/pokemon';
import DynamicImage from 'components/dynamicImage';

import { PokemonCard, PokemonName } from './styles';

const PokemonGrid = () => {
  const pokemonItems = useAppSelector(allPokemonSelector);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {pokemonItems.map((pokemon, index) => {
          const pokemonName = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`;
          const pokemonIndex = Number(pokemon.url.split('/').filter(Boolean).pop());
          return (
            <Grid xs={12} sm={'auto'} md={'auto'} key={index}>
              <PokemonCard elevation={6}>
                <>
                  <DynamicImage imageIndex={pokemonIndex}  />
                  <PokemonName>{pokemonName}</PokemonName>
                </>
              </PokemonCard>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}

export default PokemonGrid;
