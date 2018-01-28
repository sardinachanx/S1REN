import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer');

class Cluster extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.props.fetchEvents(this.props.id);
  }
  render() {
    const markers = this.props.markers.map(marker => (
      <Marker key={marker.id} position={marker.coordinates} />
    ))
    return (
        <MarkerClusterer
          onClick={this.handleClick}
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >
        {markers}
        </MarkerClusterer>
    );
  }
}

export default Cluster;