import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import HomeComponent from './js/components/home/homeComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
		<HomeComponent />
      </div>
    );
  }
}

export default App;
