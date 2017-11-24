/**
 * Created by thomashourlier on 2/26/17.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default createStore(reducers, applyMiddleware(thunk));
