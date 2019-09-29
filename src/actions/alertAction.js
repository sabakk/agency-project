import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = () => dispatch => {
  dispatch({
    type: SET_ALERT
  });
};
export const removeAlert = () => dispatch => {
  dispatch({
    type: REMOVE_ALERT
  });
};
