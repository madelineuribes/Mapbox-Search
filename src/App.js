import React, { Component } from 'react';
import Map from './Map';
import './App.css';

class App extends Component {

  // whenever you make a new class, do something
  constructor(props) {
    super(props)

    this.state = {
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9'
    } // state - hold some stuff that might change
  }

  render() {
    return (
      <div>
        <Map app={this} />
      </div>
    );
  }
}

export default App;
