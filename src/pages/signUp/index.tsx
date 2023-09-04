import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import AuthGroup from 'components/authGroup';
import { AuthContainer, AuthWrapper, Title, DescriptionWrapper, Description } from 'components/common/styles';
import { useAppDispatch } from 'data/store';
import { AuthData } from 'data/types/user';
import { signUp } from 'data/actions/user';

const SignUp = () => {
  const dispatch = useAppDispatch();

  const submitHandler = useCallback((data: AuthData) => {
    dispatch<any>(signUp(data, (message) => {
      alert(message);
    }));
  }, [dispatch]);

  return (
    <AuthContainer>
      <AuthWrapper>
        <Title>Pokedex</Title>
        <DescriptionWrapper>
          <Description>Welcome to pokemon dashboard</Description>
          <NavLink to="/sign-in">Sign-in</NavLink>
        </DescriptionWrapper>
        <AuthGroup label="Sign-up" submitHandler={submitHandler} />
      </AuthWrapper>
    </AuthContainer>
  );
}

export default SignUp;
