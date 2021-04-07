import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { githubSaga } from './github'

import createSagaMiddleware from 'redux-saga';

import task from './task';
import github from './github'

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = combineReducers({
	task,
	github
});

export const store = configureStore({
	reducer: rootReducer,
	middleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}