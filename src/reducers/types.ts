import { AuthState } from '../store/auth/types';
import { PlaylistState } from '../store/playlist/types';

export interface REDUCER_STATE {
  authReducer: AuthState,
  playlistReducer: PlaylistState
};