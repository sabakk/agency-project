import axios from "axios";
import { USERS_CLEAR } from "./types";
import { getUsers } from "./userAction";
import { setAlert } from "./alertAction";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.Token = token;
  } else {
    delete axios.defaults.headers.Token;
  }
};

export const register = formData => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await await axios.post("users", formData);
    if (res.success) {
      dispatch({
        type: USERS_CLEAR
      });
      dispatch(setAlert());
      dispatch(getUsers(1));
    } else {
      console.log(res.message);
    }
  } catch (err) {
    console.log(err);
  }
};
