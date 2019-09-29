import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = {
  open: false
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        open: true
      };
    case REMOVE_ALERT:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
