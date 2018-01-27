import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import Tweets from '../components/Tweets';
import Overview from '../components/Overview';
import './HomePage.css';
import Locations from '../components/Locations';

const HomePage = () => {
	return (
		<div className="top-padding">
			<Columns>
				<Column isSize={8}>
					<Overview />
					<Tweets tweets={[{'id': 2, 'author': 'Rick', 'content': 'test'},{'id': 3, 'author': 'Bob', 'content': 'lol'}]} />
				</Column>
				<Column isSize={4}>
					<Locations />
				</Column>
			</Columns>
		</div>
	);
}

export default HomePage;