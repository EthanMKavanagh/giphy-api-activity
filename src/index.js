import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// CREATE REDUCERS HERE
// --->

function* watcherSaga() {
    // Input saga functions here
    // ex. yield takeEvery('FETCH_GIF', fetchGifSaga);
    yield takeEvery('CREATE_FAVE', createFave)
}

function* createFave(action) {
    console.log('hit createFave');
    yield axios({
        method: 'POST',
        url: '/image',
        payload: action.payload
    });
}

// CREATE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// REDUX STORE
const reduxStore = createStore(
    combineReducers({
        // ADD REDUCER HERE
    }),
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>,
    document.getElementById('react-root'));