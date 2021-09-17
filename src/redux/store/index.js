import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import allReducer from "../";
import allSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware];

const middleware = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(allReducer, middleware);

sagaMiddleware.run(allSaga);

export default store;
