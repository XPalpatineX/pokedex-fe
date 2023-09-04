import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import AuthGroup from 'components/authGroup';
import { AuthContainer, AuthWrapper, Title, DescriptionWrapper, Description } from 'components/common/styles';
import { useAppDispatch } from 'data/store';
import { AuthData } from 'data/types/user';
import { signIn } from 'data/actions/user';

const SignIn = () => {
  const dispatch = useAppDispatch();

  const submitHandler = useCallback((data: AuthData) => {
    dispatch<any>(signIn(data, (message) => {
      alert(message);
    }));
  }, [dispatch]);

  return (
    <AuthContainer>
      <AuthWrapper>
        <Title>Pokedex</Title>
        <DescriptionWrapper>
          <Description>Welcome to pokemon dashboard</Description>
          <NavLink to="/sign-up">Sign-up</NavLink>
        </DescriptionWrapper>
        <AuthGroup label="Sign-in" submitHandler={submitHandler} />
      </AuthWrapper>
    </AuthContainer>
  );
}

export default SignIn;
