import { User, AuthActionTypes } from "./types";

export const authUser = (userData: User): AuthActionTypes => {
  return {
    type: "USER_AUTHENTICATION",
    payload: userData
  }
};