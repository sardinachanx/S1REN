import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Tweet from '../Tweet';
import './index.css';
//import InfiniteScroll from 'react-infinite-scroller';

class Tweets extends Component {
	constructor(props){
		super(props);
		this.state = {
            ...props,
            hasMoreItems: true,
        }
        this.deleteTweet = this.deleteTweet.bind(this);
    }
    deleteTweet(id){
        const apiClient = this.props.apiClient;
        const newState = this.state;
        const index = newState.tweets.findIndex(a => a.id === id);
        if (index !== -1){
            newState.tweets.splice(index, 1);
            this.setState(newState);
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ tweets: nextProps.tweets });  
    }
    //searchKeyword(kw){}
	render() {
		//const tweetList = this.state.requests.map((tweet) =>
        //<Tweet key={tweet.id} id={tweet.id} sender={tweet.sender} coordinates={tweet.coordinates} message={tweet.message} deleteTweet={this.deleteTweet} />)

        return (
			<div className="Tweets">
                
        	</div>
        );
	}
}

export default Tweets;