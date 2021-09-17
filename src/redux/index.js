import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import { default as scheduler } from "./scheduler/scheduler.duck";

export default combineReducers({
  scheduler,
  toastr: toastrReducer,
});
