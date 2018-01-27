import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Tweet from '../Tweet';
import './index.css';

class Tweets extends Component {
	constructor(props){
		super(props);
		this.state = {
			...props
		}
	}
	render() {
		const tweetList = this.state.tweets.map((tweet) =>
        <Tweet key={tweet.id} username={tweet.author} date={tweet.date} content={tweet.content} />)

        return (
			<div className="Tweets">
            	{tweetList}
        	</div>
        );
	}
}

export default Tweets;