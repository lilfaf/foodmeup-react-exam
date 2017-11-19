/**
 * Get list of jedi
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchJedi } from './api';

import { jediReceived, jediError } from './action';
import { FETCH_JEDI } from './constants';

export function* getJedi() {
  try {
    const { data } = yield call(fetchJedi);
    yield put(jediReceived(data));
  } catch (err) {
    yield put(jediError(err));
  }
}

export function* Jedi() {
  yield takeLatest(FETCH_JEDI, getJedi);
}

export default Jedi;
