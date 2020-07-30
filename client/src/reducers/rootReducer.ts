import { combineReducers, Reducer } from 'redux';
import { playlistReducer } from './playlist';
import { sessionReducer } from './session';

export const rootReducer: Reducer = combineReducers({
  playlistReducer,
  sessionReducer
});

// export type RootState = ReturnType<typeof rootReducer>