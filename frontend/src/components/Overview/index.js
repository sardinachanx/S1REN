import React from 'react';
import 'bulma/css/bulma.css';
import {Hero, HeroBody, Container, Title} from 'bloomer';
import Legend from '../Legend';

const Overview = (props) => {
	return (
		<Hero isSize='small'>
            <HeroBody>
                <Container>
                    <Title>Title</Title>
                    <Legend />
                </Container>
            </HeroBody>
        </Hero>
	);
}

export default Overview;