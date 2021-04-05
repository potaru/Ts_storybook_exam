import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import task from './Task';

const rootReducer = combineReducers({
  task
});


const store = createStore(rootReducer, composeWithDevTools())


export type RootState = ReturnType<typeof rootReducer>;

export default store