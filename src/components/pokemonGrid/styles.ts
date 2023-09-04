import styled from "styled-components";
import Paper from '@mui/material/Paper';

export const GridContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const PokemonCard = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;

export const PokemonName = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
`;