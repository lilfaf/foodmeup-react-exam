import { combineReducers } from 'redux';
import jediReducer from './jedi/reducer';

export default combineReducers({
  jedi: jediReducer,
});
