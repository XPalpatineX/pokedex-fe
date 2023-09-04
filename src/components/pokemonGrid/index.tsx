import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { PokemonCard } from './styles';

const PokemonGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(20)).map((_, index) => (
          <Grid xs={12} sm={'auto'} md={'auto'} key={index}>
            <PokemonCard>xs=2</PokemonCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PokemonGrid;
