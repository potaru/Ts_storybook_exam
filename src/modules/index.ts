import { combineReducers } from 'redux';
import task from './Task';

const rootReducer = combineReducers({
  task
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;