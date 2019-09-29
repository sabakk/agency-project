import axios from "axios";
import { TOKEN_GET, TOKEN_ERROR, TOKEN_LOADING } from "./types";

export const getToken = () => async dispatch => {
  dispatch({
    type: TOKEN_LOADING
  });
  try {
    const res = await axios.get("token");

    dispatch({
      type: TOKEN_GET,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: TOKEN_ERROR
    });
  }
};
