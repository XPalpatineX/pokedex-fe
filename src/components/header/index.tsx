import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink, useParams } from 'react-router-dom';

import { HeaderWrapper } from './styles';
import { Title } from 'components/common/styles';
import { useAppSelector } from 'data/store';
import { pokemonNameSelector } from 'data/selectors/pokemon';

const Header = () => {
  const params = useParams();
  const pokemonName = useAppSelector(pokemonNameSelector);

  return (<HeaderWrapper>
    {params?.id ? (
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to="/pokemon">
          <Title>Home</Title>
        </NavLink>
        <Title>
          {pokemonName}
        </Title>
      </Breadcrumbs>
    ) : (
      <Title>Pokedex</Title>
    )}
  
  </HeaderWrapper>);
}

export default Header;
