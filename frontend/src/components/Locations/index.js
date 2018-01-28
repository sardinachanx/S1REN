import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Tweets from '../Tweets';
import Cluster from '../Cluster';
import { apiClient } from '../../utils/apiClient';

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
      clusters: [],
      results: []
    }
    this.apiClient = new apiClient();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }
  componentDidMount(){
    // get clusters and set them as state
    this.apiClient.get('/clusters')
    .then(function(response) {
      for (const cluster of response.data){
        let requests = cluster.requests.splice();
        
      }
      this.setState({clusters: response.data});
    })
    .catch(function(e) {
      console.log(e);
    });
  }
  fetchEvents(id){
    const newResults = [];
    this.apiClient.get('/clusters?cluster_id='+id)
    .then(function(response) {
      const requests = response.data.requests;
      let results = this.state.results.splice();
      for (const request of requests) {
        this.apiClient.get('/rescue-requests?id='+request)
        .then(function(response) {
          // cluster, longitude, latitude, message, time
          results.push(
            {
              sender: response.data.cluster.cluster_id,
              message: response.data.message,
              coordinates: "("+response.data.latitude+","+response.data.longitude+")",
            })
        });
      }
    this.setState({results: newResults});  
      
    });
  }
  render() {
    const clusters = this.state.clusters.map((cluster) => 
      <Cluster fetchEvents={this.fetchEvents} id={cluster.cluster_id} markers={cluster.requests} />
    )
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