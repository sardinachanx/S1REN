import React from 'react';
import 'bulma/css/bulma.css';
import { Footer, Container } from 'bloomer';
import './index.css';

const PageFooter = (props) => {
	return (
        <Footer className="Footer">
            <Container>
                <div className="has-text-centered">
                    <p>Copyright © SheHacks Boston 2018</p>
                </div>
            </Container>
        </Footer>
	);
}

export default PageFooter;