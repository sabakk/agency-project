import { USER_GET, USER_ERROR, USER_LOADING } from "../actions/types";

const initialState = {
  avatar: null,
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
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default user;
