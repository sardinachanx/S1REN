import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import Tweet from '../components/Tweet';

const HomePage = () => {
	return (
		<Columns>
			<Column isSize={8}>
				<Tweet username="Kat"/>
			</Column>
			<Column isSize={4}>
				Hello world
			</Column>
		</Columns>
	);
}

export default HomePage;