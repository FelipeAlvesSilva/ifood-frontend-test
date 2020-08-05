import { combineReducers } from 'redux';
import { playlistReducer } from './playlist';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  playlistReducer,
  authReducer
});
// export type RootState = ReturnType<typeof rootReducer>;