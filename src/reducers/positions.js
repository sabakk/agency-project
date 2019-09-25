import {
  POSITIONS_GET,
  POSITIONS_ERROR,
  POSITIONS_LOADING
} from "../actions/types";

const initialState = {
  position: null,
  loading: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POSITIONS_GET:
      return {
        ...state,
        position: payload.positions,
        loading: false
      };
    case POSITIONS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case POSITIONS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
