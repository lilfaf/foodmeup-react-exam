import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JediForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = ({ target: { value } }) =>
    this.setState({ name: value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJedi(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <button type="submit">Add a new jedi</button>
      </form>
    );
  }
}

JediForm.propTypes = {
  addJedi: PropTypes.func.isRequired,
};


export default JediForm;
