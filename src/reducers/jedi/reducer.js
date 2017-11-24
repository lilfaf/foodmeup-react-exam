/**
 * Created by thomashourlier on 2/26/17.
 */

import { FETCH_FINISH, FETCH_ERROR } from './types';

const initialState = {
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case FETCH_FINISH:
      return {
        ...state,
        data: payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
