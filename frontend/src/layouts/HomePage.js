import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import Tweets from '../components/Tweets';
import Overview from '../components/Overview';
import './HomePage.css';

const HomePage = () => {
	return (
		<div className="top-padding">
			<Columns>
				<Column isSize={8}>
					<Overview />
					<Tweets />
				</Column>
				<Column isSize={4}>
					<img src="http://placehold.it/450x250" alt="map"/>
					<Tweets />
				</Column>
			</Columns>
		</div>
	);
}

export default HomePage;