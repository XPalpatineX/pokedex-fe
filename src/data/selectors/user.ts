import { createSelector } from 'reselect';
import { AppState } from 'data/store';

const getUserSelector = (state: AppState) => state.user;
export const isAuthSelector = createSelector(
  getUserSelector,
  (user) => Boolean(user?.accessToken),
);
