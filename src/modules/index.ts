import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import task from './Task';

const rootReducer = combineReducers({
  task
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer })
