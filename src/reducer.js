/**
 * Created by thomashourlier on 2/26/17.
 */
import { combineReducers } from 'redux';
import { JEDI_ERROR, JEDI_RECEIVED } from './constants';


const jediReceived = (state, { jedi }) => jedi;

function jediReducer(state = [], action) {
  switch (action.type) {
    case JEDI_RECEIVED:
      return jediReceived(state, action.payload);
    case JEDI_ERROR:
      console.error(action.error);
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  jedi: jediReducer,
});
