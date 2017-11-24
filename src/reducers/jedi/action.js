/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';
import {
  FETCH_FINISH,
  FETCH_ERROR,
  CREATE_SUCCESS,
  CREATE_ERROR,
} from './types';

const JEDI_API_URL = 'http://localhost:3001/jedi';

const fetchJediFinish = data => ({
  type: FETCH_FINISH,
  payload: data,
});

const fetchJediError = error => ({
  type: FETCH_ERROR,
  error,
});

export const fetchJedi = () => (
  (dispatch) => {
    axios.get(JEDI_API_URL)
      .then((res) => {
        dispatch(fetchJediFinish(res.data));
      })
      .catch((err) => {
        dispatch(fetchJediError(err.message));
      });
  }
);

const createJediSuccess = jedi => ({
  type: CREATE_SUCCESS,
  payload: jedi,
});

const createJediError = error => ({
  type: CREATE_ERROR,
  error,
});

export const createJedi = name => (
  (dispatch) => {
    axios.post(JEDI_API_URL, { name })
      .then((res) => {
        dispatch(createJediSuccess(res.data));
      })
      .catch((err) => {
        dispatch(createJediError(err.message));
      });
  }
);
