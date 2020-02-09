import {
  USER_GET,
  USER_ERROR,
  USER_LOADING,
  USERS_GET,
  USERS_ERROR,
  USERS_LOADING,
  USERS_CLEAR,
  LOGOUT
} from "../actions/types";

export const getUserInit = () => ({
  type: USER_LOADING
});

export const getUserSuccess = res => ({
  type: USER_GET,
  payload: res
});

export const getUserError = error => ({
  type: USER_ERROR,
  payload: error
});

export const getUsersInit = (page, mediaMatch) => ({
  type: USERS_LOADING,
  page,
  mediaMatch
});

export const getUsersSuccess = res => ({
  type: USERS_GET,
  payload: res
});

export const getUsersError = error => ({
  type: USERS_ERROR,
  payload: error
});

export const usersClear = () => ({
  type: USERS_CLEAR
});

export const logout = () => ({ type: LOGOUT });
