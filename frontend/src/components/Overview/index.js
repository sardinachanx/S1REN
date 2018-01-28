import React from 'react';
import 'bulma/css/bulma.css';
import { Hero, HeroBody, Container, Title} from 'bloomer';
import Legend from '../Legend';
import './index.css';

const Overview = (props) => {
	return (
		<Hero isSize='small'>
            <HeroBody>
                <Container isFluid>
                    <Title isSize={4}>Clusters requesting help</Title>
                    <p>The following list of clusters requesting help provides first responders an easy way to view real-time tweets determined to be requests for help. A cluster is a group of people requesting help in close proximity to each other. Click a cluster marker on the map to view associated tweets.</p>
                    <Legend />
                </Container>
            </HeroBody>
        </Hero>
	);
}

export default Overview;