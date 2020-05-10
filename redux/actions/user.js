import { SET_USER, UNSET_USER } from "./type";

export const setUser = user => ({
  type: SET_USER,
  payload: user
});
export const unsetUser = () => ({
  type: UNSET_USER,
  payload: {}
});
