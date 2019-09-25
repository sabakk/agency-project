import axios from "axios";
import { POSITIONS_GET, POSITIONS_ERROR, POSITIONS_LOADING } from "./types";
// axios.defaults.baseURL =
//   "https://frontend-test-assignment-api.abz.agency/api/v1/";
// axios.interceptors.response.use(
//   res => res.data
//     err => Promise.reject(err.response)
// );

export const getPositions = () => async dispatch => {
  dispatch({
    type: POSITIONS_LOADING
  });
  try {
    const res = await axios.get("positions");

    dispatch({
      type: POSITIONS_GET,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: POSITIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
