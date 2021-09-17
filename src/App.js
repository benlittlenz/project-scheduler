import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as R from "ramda";

import SchedulerContainer from "./containers";
import * as selectors from "./redux/scheduler/scheduler.selector";
import { getAllData } from "./redux/scheduler/scheduler.duck";

function App({ actions, isLoading }) {
  useEffect(() => {
    actions.getAllData()
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <SchedulerContainer />
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getAllData,
    },
    dispatch
  ),
});

const mapStateToDispatch = R.applySpec({
  isLoading: selectors.isLoadingSelector,
});

export default connect(mapStateToDispatch, mapDispatchToProps)(App);
