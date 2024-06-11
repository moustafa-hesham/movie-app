import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { moviesReducer } from '../reducers/movieReducer';

import { thunk } from 'redux-thunk';

//create store
export const store = createStore(
  moviesReducer,

  applyMiddleware(thunk)
);
