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
					Hello world
				</Column>
			</Columns>
		</Container>
	);
}

export default HomePage;