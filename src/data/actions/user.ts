import { Dispatch } from 'redux';

import { EUserAction } from 'data/types/action.types';
import { IErrorCallback } from 'data/types/common';
import { API_URL } from 'data/types/common';
import { AuthData } from 'data/types/user';

export const signIn = (signUpData: AuthData, error: IErrorCallback = () => {}) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const urlWithQueryParams = `${API_URL}/auth/sign-in`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    }
    const userData = await fetch(urlWithQueryParams, requestOptions).then((data) => data.json());
    
    if (userData?.statusCode >= 400) {
      return error(userData?.message);
    }
    dispatch({
      type: EUserAction.SIGN_IN,
      payload: {
        userData
      }
    })
  } catch (e: any) {
    error(e.message);
  } 
}

export const signUp = (signInData: AuthData, error: IErrorCallback = () => {}) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const urlWithQueryParams = `${API_URL}/auth/sign-up`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signInData),
    }
    const userData = await fetch(urlWithQueryParams, requestOptions).then((data) => data.json());

    if (userData?.statusCode >= 400) {
      return error(userData?.message);
    }
    dispatch({
      type: EUserAction.SIGN_UP,
      payload: {
        userData
      }
    })
  } catch (e: any) {
    error(e.message);
  } 
}


export const logout = () => (dispatch: Dispatch): void => {
  dispatch({
    type: EUserAction.LOGOUT,
  });
}