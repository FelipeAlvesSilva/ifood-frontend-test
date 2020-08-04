import { AuthState, AuthActionTypes } from '../store/auth/types';
import { setAccessToken, deleteAccessToken, refreshAccessToken } from '../store/auth/actions';
import { searchPlaylists, listPlaylists, filterPlaylists } from '../store/playlist/actions';

describe('Reducers tests', () => {
  xtest('Playlist reducer', () => { });

  test('Setting authentication token', () => {
    let tokenMock: AuthState = {
      accessToken: {
        token: 'access_token_mock',
        expires: 3000,
        tokenType: 'bearer'
      }
    };
    let expectedAction: AuthActionTypes = {
      type: "USER_AUTHENTICATION",
      payload: tokenMock
    };

    expect(setAccessToken(tokenMock)).toEqual(expectedAction);
  });

  xtest('Refreshing authentication token', () => {
    let oldToken: AuthState = {
      accessToken: {
        token: 'access_token_mock',
        expires: 3000,
        tokenType: 'bearer'
      }
    };
    let expectedAction: AuthActionTypes = {
      type: "USER_AUTHENTICATION",
      payload: {
        accessToken: {
          token: 'access_token_mock_access_token_mock',
          expires: 5000,
          tokenType: 'bearer'
        }
      }
    };
    refreshAccessToken(oldToken);
  });

  test('Deleting authentication token', () => {
    let initialToken = {
      token: '',
      tokenType: '',
      expires: 0
    };
    let expectedAction: AuthActionTypes = {
      type: "DELETE_USER_AUTHENTICATION",
      payload: {
        accessToken: initialToken
      }
    };

    expect(deleteAccessToken()).toEqual(expectedAction);
  });
});