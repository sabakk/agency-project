import { takeLatest, put, all, call } from "redux-saga/effects";
import { ApiService } from "../services/api";
import { TOKEN_LOADING } from "../actions/types";

import { getTokenSuccess, getTokenError } from "../actions/tokenAction";

export function* getToken() {
  try {
    const res = yield ApiService.getToken();
    yield put(getTokenSuccess(res));
  } catch (error) {
    yield put(getTokenError(error));
  }
}

export function* tokenWatcher() {
  yield takeLatest(TOKEN_LOADING, getToken);
}

export function* tokenSaga() {
  yield all([call(tokenWatcher)]);
}
