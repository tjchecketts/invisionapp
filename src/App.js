import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5>Eureka Heights Brew Co.</h5>
          <h1 className="App-title">Flight of (5) 4 ox Pours of Any of Our Beers</h1>
          <Menu />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
