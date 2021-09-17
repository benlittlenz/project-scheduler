import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as R from "ramda";

import Scheduler from "./containers/Scheduler";
import * as selectors from "./redux/scheduler/scheduler.selector";
import { getAllData } from "./redux/scheduler/scheduler.duck";

function App({ actions, isLoading }) {
    useEffect(() => {
      const data = actions.getAllData();
    }, []);
  return (
    <div className="App">
      <Scheduler />
    </div>
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
