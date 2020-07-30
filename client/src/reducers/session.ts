import { SessionState, USER_AUTHENTICATION } from "../store/session/types";

const INITIAL_STATE: SessionState = {
  session: { 
    id: '', 
    displayName: '', 
    email: ''
  }
};

export const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION:
      return state;
    default:
      return state;
  }
};