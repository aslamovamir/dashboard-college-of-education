import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './layout/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Dashboard />
      </div>
    );
  }
}

export default App;
