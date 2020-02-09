import { TOKEN_GET, TOKEN_ERROR, TOKEN_LOADING } from "./types";

export const getTokenInit = () => ({
  type: TOKEN_LOADING
});

export const getTokenSuccess = res => ({
  type: TOKEN_GET,
  payload: res
});

export const getTokenError = error => ({
  type: TOKEN_ERROR,
  payload: error
});
