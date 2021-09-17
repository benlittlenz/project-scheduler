import { takeLatest, put } from "redux-saga/effects";

import * as actions from "./boards.duck";

function* getAllDataSaga() {
  try {
    yield put(actions.setLoadingState(true));
  } catch (err) {
    console.log(err);
  }
}

export default function* () {
  yield takeLatest(actions.getAllData, getAllDataSaga);
}
