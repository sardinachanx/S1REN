import React from 'react';
import 'bulma/css/bulma.css';
import {Column, Columns, Hero, HeroBody, Container, Title} from 'bloomer';
import Legend from '../Legend';
import Search from '../Search';

const Overview = (props) => {
	return (
		<Hero isSize='small'>
            <HeroBody>
                <Container isFluid>
                    <Columns>
                        <Column><Title isSize={4}>View recent tweets</Title></Column>
                        <Column><Search /></Column>
                    </Columns>
                    <Legend />
                </Container>
            </HeroBody>
        </Hero>
	);
}

export default Overview;