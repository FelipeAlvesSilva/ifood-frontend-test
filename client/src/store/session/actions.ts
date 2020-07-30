import { User, SessionActionTypes } from "./types";

export const authUser = (userData: User): SessionActionTypes => {
  return {
    type: "USER_AUTHENTICATION",
    payload: userData
  }
};