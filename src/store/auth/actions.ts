import { AuthActionTypes, AuthState } from "./types";
import { spotifyAPI } from '../../services/spotifyApi';

export const setAccessToken = (tokenData: AuthState): AuthActionTypes => {
  spotifyAPI.defaults.headers.common['Authorization'] = `Bearer${tokenData.accessToken.token}`
  return {
    type: "USER_AUTHENTICATION",
    payload: tokenData
  }
};

export const deleteAccessToken = (): AuthActionTypes => {
  return {
    type: "DELETE_USER_AUTHENTICATION",
    payload: {
      accessToken: { token: '', tokenType: '', expires: 0 },
    }
  }
};