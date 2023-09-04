import Pagination from '@mui/material/Pagination';

const PokemonPagination = () => {
  return (
    <>
      <Pagination count={11} defaultPage={1} siblingCount={0} variant="outlined" shape="rounded" />
    </>
  );
}

export default PokemonPagination;
