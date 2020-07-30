import { User } from '../session/types';

export interface Playlist {
  id: string,
  name: string,
  owner: User,
  description: string,
  public: boolean,
  images: PlaylistImages[]
};

export interface PlaylistImages {
  url: string,
  height?: number,
  width?: number
};

export interface PlaylistState {
  playlists: Playlist[]
};

// actions
export const LIST_TOP_PLAYLISTS = 'LIST_TOP_PLAYLISTS';
export const SEARCH_PLAYLISTS = 'SEARCH_PLAYLISTS';
export const FILTER_PLAYLISTS = 'FILTER_PLAYLISTS';

interface ListTopPlaylists {
  type: typeof LIST_TOP_PLAYLISTS
  payload: Playlist[]
};

interface SearchPlaylists {
  type: typeof SEARCH_PLAYLISTS
  payload: Playlist[]
};

interface FilterPlaylists {
  type: typeof FILTER_PLAYLISTS
  payload: Playlist[]
};

export type PlaylistActionTypes = ListTopPlaylists | SearchPlaylists | FilterPlaylists;