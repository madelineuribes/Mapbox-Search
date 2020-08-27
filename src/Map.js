import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {

  //component finished the thing it needed to do
  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1IjoibWFkZWxpbmV1cmliZXMiLCJhIjoiY2tlZDd0Z2pvMDMxMTJ5bXo2eXZiNTY4ayJ9.rfyeR7RCqUG9tv4KGHfSSg';

    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;
