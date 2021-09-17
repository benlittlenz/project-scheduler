import { takeLatest, put } from "redux-saga/effects";

import * as actions from "./scheduler.duck";
import * as apiCalls from "./scheduler.api";

function* getAllDataSaga() {
  yield put(actions.setLoadingState(true));
  try {
    const result = yield apiCalls.getAllDeliverables();
    console.log("RESULT", result)
    yield put(actions.getAllDataSuccess(result.data.records));
  } catch (err) {
    console.log(err);
  }
}

export default function* () {
  yield takeLatest(actions.getAllData, getAllDataSaga);
}
