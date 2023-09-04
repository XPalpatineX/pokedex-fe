import { Reducer, AnyAction } from 'redux';
import { EUserAction } from 'data/types/action.types';
import { AuthTokens } from 'data/types/user';

interface UserState {
  username: string;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: UserState = {
  username: '',
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
};

export const userReducer: Reducer<UserState, AnyAction> = (state = initialState, action: any) => {
  switch (action.type) {
    case EUserAction.SIGN_UP:
    case EUserAction.SIGN_IN: {
      const { userData }: { userData: AuthTokens } = action.payload;

      const refreshToken = userData.refreshToken;
      const accessToken = userData.accessToken;

      if (!refreshToken || !accessToken) return { ...state };

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return {
        ...state,
        refreshToken,
        accessToken,
      };
    }
    case EUserAction.LOGOUT: {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return initialState;
    }
    default:
      return state
  }
}