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


// ==== SAGA FUNCTION AND REDUCER FOR FETCHING FAVORITES==
function* fetchFavoritesSaga(action) {
    console.log('in fetchFavoritesSaga with:', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/favorite'
    });

    console.log('back from FAVORITE GET with:', response.data);

    yield put({
        type: 'RESET_FAVORITES',
        payload: response.data
    })
}

const favoritesListReducer = (state = [], action) => {
    console.log('state is:', state)
    switch (action.type) {
        case 'RESET_FAVORITES':
            return action.payload
        default:
            return state;
    }
};
// ==== SAGA FUNCTION AND REDUCER FOR FETCHING FAVORITES==

// ==== SAGA FUNCTION AND REDUCER FOR FETCHING CATEGORIES==
function* fetchCategorySaga(action) {
    console.log('in fetchCategorySaga with:', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/category'
    });

    console.log('back from CATEGORY GET with:', response.data);

    yield put({
        type: 'RESET_CATEGORY',
        payload: response.data
    })
}

// function* setCategorySaga(action) {
//     console.log('setCategorySaga action is:', action);
//     let response = yield axios({
//         method: 'SET_CATEGORY',
//         url: `/api/category`
//     });

//     yield put({
//         type: 'RESET_CATEGORY',
//         payload: response.data
//     });
// }

const categoryListReducer = (state = [], action) => {
    console.log('state is:', state)
    switch (action.type) {
        case 'RESET_CATEGORY':
            return action.payload
        default:
            return state;
    }
};
// ==== SAGA FUNCTION AND REDUCER FOR FETCHING CATEGORIES==



function* watcherSaga() {
    // Input saga functions here
    // ex. yield takeEvery('FETCH_GIF', fetchGifSaga);
    yield takeEvery('FETCH_FAVORITES', fetchFavoritesSaga);
    yield takeEvery('FETCH_CATEGORY', fetchCategorySaga);
    yield takeEvery('CREATE_FAVE', createFave);
    yield takeEvery("FETCH_IMAGE", fetchImageSaga);
    // yield takeEvery('SET_CATEGORY', setCategorySaga);
}

//Mike's GET image reducer
const imageReducer = (state = [], action) => {
  console.log("in imageReducer", state, action);

  if (action.type === "SET_IMAGE") {
    return action.payload;
  }
  return state;
};
function* fetchImageSaga(action) {
  console.log("in fetchImageSaga", action);
  let response = yield axios({
    method: "GET",
    url: "/api/image",
  });
  yield put({
    type: "SET_IMAGE",
    payload: response.data,
  });
}



function* createFave(action) {
    console.log('hit createFave', action.payload);
    yield axios({
        method: 'POST',
        url: '/api/favorite',
        data: action.payload
    });
    yield put({
        type: 'FETCH_IMAGE'
    });
}
 
// CREATE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// REDUX STORE
const reduxStore = createStore(
    combineReducers({
        favoritesListReducer,// Reducer that holds Favorites List
        categoryListReducer
    }),
    applyMiddleware(logger, sagaMiddleware)
)


sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
