import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class TweetMarker extends Component {
  render() {
    return (
        <Marker
          id={this.props.id}
          position={this.props.coordinates}
        />
    );
  }
}

export default TweetMarker;
