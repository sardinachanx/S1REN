import React from 'react';
import 'bulma/css/bulma.css';
import Tweet from '../Tweet';
import './index.css';

const Tweets = (props) => {
    const tweetList = props.tweets.map((tweet) =>
        <Tweet key={tweet.id} username={tweet.author} date={tweet.date} content={tweet.content} />
    )
	return (
        <div className="Tweets">
            {tweetList}
        </div>
	);
}

export default Tweets;