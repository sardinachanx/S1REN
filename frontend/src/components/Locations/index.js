import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Tweets from '../Tweets';
import Cluster from '../Cluster';

const TweetsMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 41.850033, lng: -94.65 }}
  >
    <Cluster fetchEvents={props.fetchEvents} id={1} markers={[{id: 3, coordinates: {lat: 39.24, lng: -104.51}}, {id: 4, coordinates: {lat: 40.24, lng: -102.51}}]} />

  </GoogleMap>
));

class Locations extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
    this.fetchEvents = this.fetchEvents.bind(this);
  }
  fetchEvents(id){
    console.log(id);
  }
  render() {
    return (
      <div>
        <TweetsMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          fetchEvents={this.fetchEvents}
        />
        <Tweets tweets={this.state.results} />
      </div>
    );
  }
}

export default Locations;