/**
 * Created by thomashourlier on 2/26/17.
 */

import { ADD_NEW_JEDI, FETCH_JEDI, JEDI_ERROR, JEDI_RECEIVED } from './constants';

export const fetchJedi = () =>
  ({
    type: FETCH_JEDI,
  });

export const jediReceived = jedi =>
  ({
    type: JEDI_RECEIVED,
    payload: { jedi },
  });

export const jediError = error =>
  ({
    type: JEDI_ERROR,
    error,
  });

export const addJedi = name =>
  ({
    type: ADD_NEW_JEDI,
    payload: { name },
  });
