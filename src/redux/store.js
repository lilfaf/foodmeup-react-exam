/**
 * Created by thomashourlier on 2/26/17.
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import sagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// then run the sagas
sagas.forEach((saga) => {
  sagaMiddleware.run(saga);
});

