import {
  USER_GET,
  USER_ERROR,
  USER_LOADING,
  TOKEN_GET,
  TOKEN_ERROR,
  TOKEN_LOADING,
  LOGOUT
} from "../actions/types";

const initialState = {
  avatar: {},
  token: "",
  loading: false,
  error: {}
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_GET:
      return {
        ...state,
        avatar: payload.user,
        loading: false
      };
    case TOKEN_GET:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        loading: false
      };
    case USER_ERROR:
    case TOKEN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case USER_LOADING:
    case TOKEN_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        avatar: {},
        token: "",
        loading: false
      };
    default:
      return state;
  }
};

export default user;
