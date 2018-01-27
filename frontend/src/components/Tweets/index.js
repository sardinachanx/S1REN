import React from 'react';
import 'bulma/css/bulma.css';
import Tweet from '../Tweet';
import './index.css';

const Tweets = (props) => {
	return (
        <div className="Tweets">
            <Tweet username="Kat" content="hello world" />
            <Tweet username="Kat" content="hello world" />
            <Tweet username="Kat" content="hello world" />
            <Tweet username="Kat" content="hello world" />
        </div>
	);
}

export default Tweets;