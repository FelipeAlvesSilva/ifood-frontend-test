import { PlaylistActionTypes, Playlist } from './types';

export const listPlaylists = (playlists: Playlist[]): PlaylistActionTypes => {
  return {
    type: "LIST_TOP_PLAYLISTS",
    payload: playlists
  }
};

export const searchPlaylists = (playlists: Playlist[]): PlaylistActionTypes => {
  return {
    type: "SEARCH_PLAYLISTS",
    payload: playlists
  }
};

export const filterPlaylists = (playlists: Playlist[]): PlaylistActionTypes => {
  return {
    type: "FILTER_PLAYLISTS",
    payload: playlists
  }
};