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
        this.deleteTweet = this.deleteTweet.bind(this);
    }
    deleteTweet(id){
        const newState = this.state;
        const index = newState.tweets.findIndex(a => a.id === id);
        if (index === -1) return;
        newState.tweets.splice(index, 1);
        this.setState(newState);
    }
	render() {
		const tweetList = this.state.tweets.map((tweet) =>
        <Tweet key={tweet.id} id={tweet.id} username={tweet.author} date={tweet.date} content={tweet.content} deleteTweet={this.deleteTweet} />)

        return (
			<div className="Tweets">
            	{tweetList}
        	</div>
        );
	}
}

export default Tweets;