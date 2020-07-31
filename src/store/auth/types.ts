export interface User {
  id: string,
  displayName: string,
  email: string,
};

export interface AuthState {
  session: User
};

export const USER_AUTHENTICATION = 'USER_AUTHENTICATION';

interface AuthUser {
  type: typeof USER_AUTHENTICATION
  payload: User
};

export type AuthActionTypes = AuthUser