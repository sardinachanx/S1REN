import React from 'react';
import 'bulma/css/bulma.css';
import Tweet from '../Tweet';

const Tweets = (props) => {
	return (
        <div>
            <Tweet username="Kat" content="hello world" />
            <Tweet username="Kat" content="hello world" />
            <Tweet username="Kat" content="hello world" />
            <Tweet username="Kat" content="hello world" />
        </div>
	);
}

export default Tweets;