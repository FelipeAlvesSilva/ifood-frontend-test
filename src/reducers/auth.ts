import { AuthState, USER_AUTHENTICATION } from "../store/auth/types";

const INITIAL_STATE: AuthState = {
  session: { 
    id: '', 
    displayName: '', 
    email: ''
  }
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION:
      return state;
    default:
      return state;
  }
};