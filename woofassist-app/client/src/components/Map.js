/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the Google Map component using the google-map-react library.

    Sources:
        [1] google-map-react
        [2] Material UI 
        [3] React 

*/

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 38.9911678,
      lng: -76.9370398
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCJl7fJGVQIzKzjqfcSszowI79wuduqCTY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={38.9911678}
            lng={-76.9370398}
            text="My Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
