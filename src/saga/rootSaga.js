import { all, call } from "redux-saga/effects";
import { userSaga } from "./userSaga";
import { positionSaga } from "./positionSaga";
import { tokenSaga } from "./tokenSaga";
import { registerSaga } from "./registerSaga";

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(positionSaga),
    call(tokenSaga),
    call(registerSaga)
  ]);
}
