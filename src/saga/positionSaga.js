import { takeLatest, put, all, call } from "redux-saga/effects";
import { ApiService } from "../services/api";
import { POSITIONS_LOADING } from "../actions/types";
import {
  getPositionSuccess,
  getPositionError
} from "../actions/positionsAction";

export function* getPosition() {
  try {
    const res = yield ApiService.getPosition();
    yield put(getPositionSuccess(res));
  } catch (error) {
    yield put(getPositionError(error));
  }
}

export function* positionWatcher() {
  yield takeLatest(POSITIONS_LOADING, getPosition);
}

export function* positionSaga() {
  yield all([call(positionWatcher)]);
}
