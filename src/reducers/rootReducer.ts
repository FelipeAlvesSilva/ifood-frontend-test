import { combineReducers, Reducer } from 'redux';
import { playlistReducer } from './playlist';
import { authReducer } from './auth';

export const rootReducer: Reducer = combineReducers({
  playlistReducer,
  authReducer
});

// export type RootState = ReturnType<typeof rootReducer>;