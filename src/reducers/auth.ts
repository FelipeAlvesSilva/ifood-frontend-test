import { AuthState, USER_AUTHENTICATION, AuthActionTypes, DELETE_USER_AUTHENTICATION } from "../store/auth/types";

export const INITIAL_STATE: AuthState = {
  accessToken: {
    token: '',
    tokenType: '',
    expires: 0
  }
};

export const authReducer = (state = INITIAL_STATE, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case USER_AUTHENTICATION:
      return {
        accessToken: action.payload.accessToken
      }
    case DELETE_USER_AUTHENTICATION:
      return {
        accessToken: action.payload?.accessToken
      }
    default:
      return state;
  }
};