/*
 * combines all th existing reducers
 */
import loadingSlice from './loadingSlice';
import themeSlice from './themeSlice';
import {combineReducers} from '@reduxjs/toolkit';
import snackSlice from './snackSlice';
import AuthSlice from './AuthSlice';

const reducers = {
  loading: loadingSlice,
  theme: themeSlice,
  snackBar: snackSlice,
  auth: AuthSlice,
};

// Exports

const rootReducer = combineReducers(reducers);
export default rootReducer;
