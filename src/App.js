import React, { Component } from 'react';
import Map from './Map';
import Toggle from './Toggle';
import Search from './Search';
import './App.css';

class App extends Component {

  // whenever you make a new class, do something
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9'
    } // state - hold some stuff that might change
  }

  render() {
    return (
      <div className="App">
        <Search app={this} />
        <Toggle app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
