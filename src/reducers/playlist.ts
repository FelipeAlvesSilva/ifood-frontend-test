import {
  PlaylistState,
  PlaylistActionTypes,
  LIST_TOP_PLAYLISTS,
  SEARCH_PLAYLISTS,
  FILTER_PLAYLISTS
} from "../store/playlist/types";

export const INITIAL_STATE: PlaylistState = {
  playlists: []
};

export const playlistReducer = (state = INITIAL_STATE, action: PlaylistActionTypes): PlaylistState => {
  switch (action.type) {
    case LIST_TOP_PLAYLISTS:
      return state;
    case SEARCH_PLAYLISTS:
      return state;
    case FILTER_PLAYLISTS:
      return state;
    default:
      return state;
  }
};