import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import { NavLink, useParams } from 'react-router-dom';

import { HeaderWrapper } from './styles';
import { Title } from 'components/common/styles';
import { useAppDispatch, useAppSelector } from 'data/store';
import { pokemonNameSelector } from 'data/selectors/pokemon';
import { logout } from 'data/actions/user';

const Header = () => {
  const dispatch = useAppDispatch();
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
  
    <Button variant="outlined" onClick={() => dispatch<any>(logout())}>LogOut</Button>
  </HeaderWrapper>);
}

export default Header;
