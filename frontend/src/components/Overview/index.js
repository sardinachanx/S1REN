import React from 'react';
import 'bulma/css/bulma.css';
import {Hero, HeroBody, Container, Title} from 'bloomer';

const Overview = (props) => {
	return (
		<Hero isSize='medium'>
            <HeroBody>
                <Container>
                    <Title>Title</Title>
                </Container>
            </HeroBody>
        </Hero>
	);
}

export default Overview;