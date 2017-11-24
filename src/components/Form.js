import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onInputChange = event => (
    this.setState({ name: event.target.value })
  );

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submitForm(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

Form.propTypes = {
  submitForm: PropTypes.func,
};

export default Form;
