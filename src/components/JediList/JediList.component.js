import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

JediList.propTypes = {
  fetchJedi: PropTypes.func.isRequired,
  jedi: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default JediList;
