import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, createStore, applyMiddleware, Dispatch } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

import { userReducer } from "data/reducers/user";
import { pokemonReducer } from "./reducers/pokemon";
import { loadingReducer } from "./reducers/loading";
const initialState = {};

const rootReducer = combineReducers({
  // user: userReducer,
  pokemon: pokemonReducer,
  // loading: loadingReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
