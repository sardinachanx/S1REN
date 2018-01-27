import React from 'react';
import 'bulma/css/bulma.css';
import {Container, Columns,Column} from 'bloomer';
import Tweet from '../components/Tweet';

const HomePage = () => {
	return (
		<Container>
			<Columns>
				<Column isSize={8}>
					<Tweet username="Kat" content="hello world" />
				</Column>
				<Column isSize={4}>
					Hello world
				</Column>
			</Columns>
		</Container>
	);
}

export default HomePage;