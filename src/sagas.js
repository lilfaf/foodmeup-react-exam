/**
 * Get list of jedi
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchJedi, addJedi } from './api';

import { fetchJedi as fetchJediAction, jediReceived, jediError } from './action';
import { ADD_NEW_JEDI, FETCH_JEDI } from './constants';

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

export function* postJedi({ payload }) {
  try {
    yield call(addJedi, payload.name);
    yield put(fetchJediAction());
  } catch (err) {
    yield put(jediError(err));
  }
}

export function* NewJedi() {
  yield takeLatest(ADD_NEW_JEDI, postJedi);
}

export default [Jedi, NewJedi];
