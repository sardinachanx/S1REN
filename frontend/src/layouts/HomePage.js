import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import Tweets from '../components/Tweets';
import Overview from '../components/Overview';
import './HomePage.css';
import Locations from '../components/Locations';
import Search from '../components/Search';

const HomePage = () => {
	return (
		<div className="top-padding">
			<Columns>
				<Column isSize={8}>
					<Overview />
					<Search />
					<Tweets tweets={
						[{'id': 2, 'author': 'Rick', 'place': 'Boca Raton, FL', 'content': 'Help me please'},
						{'id': 3, 'author': 'Bob', 'place': 'Tampa, FL', 'content': 'Help me'}]} />
				</Column>
				<Column isSize={4}>
					<Locations />
				</Column>
			</Columns>
		</div>
	);
}

export default HomePage;