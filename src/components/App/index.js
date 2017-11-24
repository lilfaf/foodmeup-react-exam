import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import './style.css';

import * as actions from '../../reducers/jedi/action';
import Form from '../Form';

class App extends Component {
  componentWillMount() {
    this.props.fetchJedi();
  }

  render() {
    const { jedi, error, createJedi } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {error &&
          <p>{error}</p>
        }

        <Form submitForm={createJedi} />

        {jedi.map((j, index) => (
          <div key={index}>
            Jedi: id: {j.id} name: {j.name}
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
  fetchJedi: PropTypes.func,
  createJedi: PropTypes.func,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  jedi: state.jedi.data,
  error: state.jedi.error,
});

const mapDispatchToProps = {
  fetchJedi: actions.fetchJedi,
  createJedi: actions.createJedi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
