import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {

  //component finished the thing it needed to do
  componentDidMount() {
    const app = this.props.app

    mapbox.accessToken = 'pk.eyJ1IjoibWFkZWxpbmV1cmliZXMiLCJhIjoiY2tlZDd0Z2pvMDMxMTJ5bXo2eXZiNTY4ayJ9.rfyeR7RCqUG9tv4KGHfSSg';

    const map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [
        app.state.longitude,
        app.state.latitude
      ],
      zoom: 12
    });

    const navigationControl = new mapbox.NavigationControl()

    map.addControl(navigationControl)
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;
