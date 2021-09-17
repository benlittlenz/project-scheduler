import { fork, all } from "redux-saga/effects";
import schedulerSaga from "./scheduler/scheduler.saga";

export default function* () {
  yield all([fork(schedulerSaga)]);
}
