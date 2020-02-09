import { takeLatest, put, all, call } from "redux-saga/effects";
import { ApiService } from "../services/api";
import { USER_LOADING, USERS_LOADING } from "../actions/types";

import {
  getUserSuccess,
  getUserError,
  getUsersSuccess,
  getUsersError
} from "../actions/userAction";

export function* getUser() {
  try {
    const res = yield ApiService.getUser();
    yield put(getUserSuccess(res));
  } catch (error) {
    yield put(getUserError(error));
  }
}

export function* getUsers({ page, mediaMatch }) {
  try {
    const res = yield ApiService.getUsers(page, mediaMatch);
    yield put(getUsersSuccess(res));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

export function* userWatcher() {
  yield takeLatest(USER_LOADING, getUser);
}
export function* usersWatcher() {
  yield takeLatest(USERS_LOADING, getUsers);
}

export function* userSaga() {
  yield all([call(userWatcher), call(usersWatcher)]);
}
