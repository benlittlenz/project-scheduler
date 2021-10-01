import * as R from "ramda";
import { connect } from "react-redux";
import { compose } from "recompose";

import * as selectors from "../redux/scheduler/scheduler.selector";
import Scheduler from "./Scheduler";
console.log('select', selectors)
const mapStateToProps = R.applySpec({
  isLoading: selectors.isLoadingSelector,
  data: selectors.dataSelector,
});

export default compose(connect(mapStateToProps))(Scheduler);
