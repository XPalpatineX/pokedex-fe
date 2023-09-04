import Pagination from '@mui/material/Pagination';
import { Dispatch, SetStateAction } from 'react';
import { POKEMON_LIMIT } from 'data/types/common';

interface IPokemonPagination {
  limit: number,
  page: number,
  setPage: Dispatch<SetStateAction<number>>
}

const PokemonPagination: React.FC<IPokemonPagination> = ({ page, setPage, limit = 20 }) => {
  const count = Math.ceil(POKEMON_LIMIT / limit);
  return (
    <>
      <Pagination page={page} onChange={(_, newPage) => setPage(newPage)} count={count} siblingCount={0} variant="outlined" shape="rounded" />
    </>
  );
}

export default PokemonPagination;
