import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import Pokedex from 'pages/pokedex';

import { AppWrapper } from './styles';

export const App = () => {
  const [isAuth] = useState(true);
  
  return (
    <AppWrapper className="app">
      <Routes>
        {isAuth ? (
          <>
            <Route path="/pokemon" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<>Pokemon id</>} />
            <Route path="*" element={<Navigate to="/pokemon" />} />
          </>
        ) : (
          <>
            <Route path="sign-in" element={<>sign-in</>} />
            <Route path="sign-up" element={<>sign-up</>} />
            <Route path="*" element={<Navigate to="sign-in" />} />
          </>
        )}
      </Routes>
    </AppWrapper>
  );
}
