export interface Token {
  token: string,
  tokenType: string,
  expires: number
};

export interface AuthState {
  accessToken: Token
};

export const USER_AUTHENTICATION = 'USER_AUTHENTICATION';
export const DELETE_USER_AUTHENTICATION = 'DELETE_USER_AUTHENTICATION';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

interface AuthUser {
  type: typeof USER_AUTHENTICATION | typeof DELETE_USER_AUTHENTICATION | typeof REFRESH_TOKEN
  payload: AuthState
};

export type AuthActionTypes = AuthUser;