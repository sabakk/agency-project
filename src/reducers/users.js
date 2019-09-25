import { USERS_GET, USERS_ERROR, USERS_LOADING } from "../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: {}
};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_GET:
      return {
        ...state,
        users: [...state.users, ...payload.users],
        loading: false
      };
    case USERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default users;
