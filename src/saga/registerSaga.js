import { takeLatest, put, all, call } from "redux-saga/effects";
import { startSubmit, stopSubmit } from "redux-form";

import { ApiService } from "../services/api";
import { REGISTER_INIT } from "../actions/types";
import { setAlert } from "../actions/alertAction";
import { getUsersInit, usersClear } from "../actions/userAction";

export function* postRegister({ formData }) {
  yield put(startSubmit("registration"));
  try {
    yield ApiService.postRegister(formData);
    yield put(setAlert());
    yield put(usersClear());
    yield put(getUsersInit(1, 6));
    yield put(stopSubmit("registration"));
  } catch (error) {
    yield put(stopSubmit("registration"));
  }
}

export function* registerWatcher() {
  yield takeLatest(REGISTER_INIT, postRegister);
}

export function* registerSaga() {
  yield all([call(registerWatcher)]);
}
