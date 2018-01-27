import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';

const HomePage = () => {
	return (
		<Columns>
			<Column isSize={8}>
				First column
			</Column>
			<Column isSize={4}>
				Hello world
			</Column>
		</Columns>
	);
}

export default HomePage;