import React from 'react';
import logo from './logo.svg';
import './App.css';

import JediList from './components/JediList';
import JediForm from './components/JediForm';

const App = () =>
  (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <JediList />
      <JediForm />
    </div>
  );

export default App;
