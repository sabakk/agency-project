import axios from "axios";
import {
  USER_GET,
  USER_ERROR,
  USER_LOADING,
  USERS_GET,
  USERS_ERROR,
  USERS_LOADING,
  LOGOUT
} from "../actions/types";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";
axios.interceptors.response.use(res => res.data);

export const getUser = () => async dispatch => {
  dispatch({
    type: USER_LOADING
  });
  try {
    const res = await axios.get("users/1");

    dispatch({
      type: USER_GET,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    });
  }
};

export const getUsers = page => async dispatch => {
  dispatch({
    type: USERS_LOADING
  });
  try {
    const res = await axios.get(`users?page=${page}&count=6`);
    dispatch({
      type: USERS_GET,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
