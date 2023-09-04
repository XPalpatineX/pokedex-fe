import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import Pokedex from 'pages/pokedex';
import Pokemon from 'pages/pokemon';
import SignUp from 'pages/signUp';
import SignIn from 'pages/signIn';

import { isAuthSelector } from 'data/selectors/user';

import { AppWrapper } from './styles';
import { useAppSelector } from 'data/store';

export const App = () => {
  const isAuth = useAppSelector(isAuthSelector);
  
  return (
    <AppWrapper className="app">
      <Routes>
        {isAuth ? (
          <>
            <Route path="/pokemon" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<Navigate to="/pokemon" />} />
          </>
        ) : (
          <>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="sign-in" />} />
          </>
        )}
      </Routes>
    </AppWrapper>
  );
}
