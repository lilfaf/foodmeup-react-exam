import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import './style.css';

import { fetchJedi } from '../../reducers/jedi/action';

class App extends Component {
  componentWillMount() {
    this.props.fetchJedi();
  }

  render() {
    const { jedis, error } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {error &&
          <p>{error}</p>
        }
        {jedis.map((jedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  jedis: PropTypes.array,
  fetchJedi: PropTypes.func,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  jedis: state.jedi.data,
  error: state.jedi.error,
});

const mapDispatchToProps = {
  fetchJedi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
