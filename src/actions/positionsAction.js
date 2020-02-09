import { POSITIONS_GET, POSITIONS_ERROR, POSITIONS_LOADING } from "./types";

export const getPositionInit = () => ({
  type: POSITIONS_LOADING
});

export const getPositionSuccess = res => ({
  type: POSITIONS_GET,
  payload: res
});

export const getPositionError = error => ({
  type: POSITIONS_ERROR,
  payload: error
});

// export const getPositions = () => async dispatch => {
//   dispatch({
//     type: POSITIONS_LOADING
//   });
//   try {
//     const res = await axios.get("positions");

//     dispatch({
//       type: POSITIONS_GET,
//       payload: res
//     });
//   } catch (err) {
//     dispatch({
//       type: POSITIONS_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
