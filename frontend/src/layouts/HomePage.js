import React from 'react';
import 'bulma/css/bulma.css';
import {Container, Columns,Column} from 'bloomer';
import Tweets from '../components/Tweets';
import './HomePage.css';

const HomePage = () => {
	return (
		<Container className="home">
			<Columns>
				<Column isSize={8}>
					<Tweets />
				</Column>
				<Column isSize={4}>
					<img src="http://placehold.it/450x250" alt="map"/>
					<Tweets />
				</Column>
			</Columns>
		</Container>
	);
}

export default HomePage;