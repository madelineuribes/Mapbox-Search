import React, { Component } from 'react';
import Map from './Map';
import Toggle from './Toggle';
import Search from './Search';
import PlacesPanel from './PlacesPanel'
import './App.css';

class App extends Component {

  // whenever you make a new class, do something
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: [

      ]
    } // state - hold some stuff that might change
  }

  render() {
    return (
      <div className="App">
        <PlacesPanel app={this} />
        <Search app={this} />
        <Toggle app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
