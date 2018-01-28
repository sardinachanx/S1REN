import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import Tweets from '../components/Tweets';
import Overview from '../components/Overview';
import './HomePage.css';
import Locations from '../components/Locations';
import Search from '../components/Search';
import { apiClient } from '../utils/apiClient';

class HomePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			requests: []
		}
		this.apiClient = new apiClient();
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount(){
		let requests = this.state.requests.splice();
		this.apiClient.get('/rescue-requests/')
		.then(function(response) {
			requests.push({
				id: response.data.id,
				sender: "Person in cluster "+response.data.cluster.cluster_id,
				coordinates: "("+response.data.latitude+","+response.data.longitude+")",
				message: response.data.message
			})
		})
		.catch(function(e){
			console.log(e);
		});
		this.setState({requests});
	}
	render(){
		return(
			<div className="top-padding">
			<Columns>
				<Column isSize={8}>
					<Overview />
					<Search />
					<Tweets requests={this.state.requests} apiClient={this.apiClient} />
				</Column>
				<Column isSize={4}>
					<Locations />
				</Column>
			</Columns>
		</div>
		);
	}
}

export default HomePage;