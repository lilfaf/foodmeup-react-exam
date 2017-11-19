import React from 'react';

const JediList = props =>
  props.jedi.map(jedi => (
    <div key={jedi.id}>
      Jedi: id: {jedi.id} name: {jedi.name}
    </div>
  ));

export default JediList;
