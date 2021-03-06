import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import App from './App';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxToastr
      timeOut={2000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </Provider>,
  document.getElementById("root")
);
