import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class TweetMarker extends Component {
  render() {
    return (
        <Marker
            position={this.props.coordinates}
            onClick={this.handleClick}
        />
    );
  }
}

export default TweetMarker;
