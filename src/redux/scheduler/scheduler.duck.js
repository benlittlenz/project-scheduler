import { createAction } from "redux-actions";
import { setState, getActionWrapper } from "../../utils";

const initState = {
  data: {},
  isLoading: false,
};

const wrapWithNameSpace = getActionWrapper("SCHEDULER");

export const GET_ALL_DATA = wrapWithNameSpace("GET_ALL_DATA");
export const GET_ALL_DATA_SUCCESS = wrapWithNameSpace("GET_ALL_DATA_SUCCESS");
export const SET_LOADING_STATE = "SET_LOADING_STATE";

export const getAllData = createAction(GET_ALL_DATA);
export const getAllDataSuccess = createAction(GET_ALL_DATA_SUCCESS);
export const setLoadingState = createAction(SET_LOADING_STATE);

export default (state = initState, action) => {
  const { type, payload } = action;

  const reducer = {
    [GET_ALL_DATA_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload,
    }),
    [SET_LOADING_STATE]: setState("isLoading"),
  }[type];

  return reducer ? reducer(state, payload) : state;
};
