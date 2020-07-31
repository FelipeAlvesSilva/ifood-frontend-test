import { rootReducer } from './rootReducer';
import { PlaylistState, LIST_TOP_PLAYLISTS } from "../store/playlist/types";

describe('Tests of all reducers', () => {
  test('Playlist reducer', () => {
    const mockState: PlaylistState = {
      playlists: [{
        id: '123',
        description: 'Test playlist',
        name: 'Test',
        owner: { id: '1', displayName: 'Felipe', email: 'test@test.com' },
        public: false,
        images: []
      }]
    };
    const state = rootReducer(mockState, { type: LIST_TOP_PLAYLISTS });
    expect(state).toEqual({
      playlistReducer: { playlists: mockState.playlists },
      sessionReducer: {
        session: { id: '', displayName: '', email: '' }
      }
    });
  });
  
  test('Session reducer', () => { });
});