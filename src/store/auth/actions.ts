import { AuthActionTypes, AuthState } from "./types";
import { spotifyAPI as api } from '../../services/spotifyApi';
import { REFRESH_TOKEN_BASE_URL, REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } from "../../utils/constraints";

export const setAccessToken = (tokenData: AuthState): AuthActionTypes => {
  return {
    type: "USER_AUTHENTICATION",
    payload: tokenData
  }
};

export const refreshAccessToken = (currentToken: AuthState) => {
  console.log(`currentToken: ${JSON.stringify(currentToken.accessToken)}`);
  const config = {
    headers: {
      'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    }
  };

  const data = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'grant_type': 'authorization_code',
    'code': currentToken.accessToken.token,
    'redirect_uri': REDIRECT_URI
  };

  return (dispatch: any) => {
    api.post(REFRESH_TOKEN_BASE_URL, data, config)
      .then(res => {
        console.log(res);
        const refreshToken: AuthState = {
          accessToken: {
            // res.data.access_token == <old_token>
            token: res.data?.refresh_token, //getting the new token
            tokenType: res.data?.token_type,
            expires: res.data?.expires_in
          }
        };

        dispatch(setAccessToken(refreshToken))
      })
      .catch(err => {
        console.error(err);
        return false;
      });
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