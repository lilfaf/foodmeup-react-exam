/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export function fetchJedi() {
  return axios.get('http://localhost:3001/jedi');
}

export function addJedi(name) {
  return axios.post(
    'http://localhost:3001/jedi',
    {
      name,
    },
  );
}
