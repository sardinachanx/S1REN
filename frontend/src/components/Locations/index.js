import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import TweetMarker from '../TweetMarker';
import Tweets from '../Tweets';

const TweetsMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 41.850033, lng: -94.65 }}
  >
    <TweetMarker id={3} coordinates={{ lat: 39.24, lng: -104.51 }} />
  </GoogleMap>
));

class Locations extends Component {
  render() {
    return (
      <div>
        <TweetsMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Tweets tweets={[{'id': 2, 'author': 'Rick', 'content': 'test'},{'id': 3, 'author': 'Bob', 'content': 'lol'}]} />
      </div>
    );
  }
}

export default Locations;