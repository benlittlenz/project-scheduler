import { createSelector } from "reselect";
import * as R from "ramda";

export const moduleSelector = R.prop("scheduler");

export const dataSelector = createSelector(moduleSelector, R.prop("data"));

export const isLoadingSelector = createSelector(
  moduleSelector,
  R.prop("isLoading")
);
