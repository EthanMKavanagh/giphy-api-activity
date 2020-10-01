import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

// CREATE REDUCERS HERE
// --->

function* fetchImageSaga(action) {
  console.log("in fetchImageSaga", action);
  let response = yield axios({
    method: "GET",
    url: "/api/category",
  });
  yield put({
    type: "FETCH_IMAGE",
    payload: response.data,
  });
}

function* watcherSaga() {
  // Input saga functions here
  // ex. yield takeEvery('FETCH_GIF', fetchGifSaga);
  yield takeEvery("FETCH_IMAGE", fetchImageSaga);
}

// CREATE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// REDUX STORE
const reduxStore = createStore(
  combineReducers({
    // ADD REDUCER HERE
  }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
