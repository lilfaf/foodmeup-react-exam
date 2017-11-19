import React, { Component } from 'react';

class JediList extends Component {
  componentWillMount() {
    this.props.fetchJedi();
  }

  render() {
    return (
      this.props.jedi.map(jedi => (
        <div key={jedi.id}>
          Jedi: id: {jedi.id} name: {jedi.name}
        </div>
      ))
    );
  }
}

export default JediList;
