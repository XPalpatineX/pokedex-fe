import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

import { userReducer } from "./reducers/user.reducer";
import { pokemonReducer } from "./reducers/pokemon.reducer";
import { loadingReducer } from "./reducers/loading.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
  loading: loadingReducer,
});

export const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
