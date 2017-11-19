/**
 * Created by thomashourlier on 2/26/17.
 */

// import axios from 'axios';
import { ADD_NEW_JEDI, FETCH_JEDI, JEDI_ERROR, JEDI_RECEIVED } from './constants';

// export function fetchJedi() {
//   return (dispatch) => {
//     axios.get('http://localhost:3001/jedi')
//       .then((res) => {
//         dispatch({
//           type: 'FETCH_FINISH',
//           payload: res.data,
//         });
//       });
//   };
// }

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
