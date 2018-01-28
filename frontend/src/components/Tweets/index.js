import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Tweet from '../Tweet';
import './index.css';

class Tweets extends Component {
	constructor(props){
		super(props);
		this.state = {
            ...props,
            hasMoreItems: true,
        }
        console.log(this.props);
        this.deleteTweet = this.deleteTweet.bind(this);
    }
    deleteTweet(id){
<<<<<<< HEAD
        const apiClient = this.props.apiClient;
        apiClient.delete('/clusters/'+id);
=======
>>>>>>> parent of 6b87af5... Get rqs on home page
        const newState = this.state;
        const index = newState.requests.findIndex(a => a.id === id);
        if (index !== -1){
            newState.requests.splice(index, 1);
            this.setState(newState);
        }
    }
    componentWillReceiveProps(nextProps) {
<<<<<<< HEAD
        this.setState({ requests: nextProps.requests });
    }
    //searchKeyword(kw){}
	render() {
        const tweetList = this.state.requests.map((tweet) =>
=======
        this.setState({ tweets: nextProps.tweets });  
      }
    //searchKeyword(kw){}
	render() {
		const tweetList = this.state.tweets.map((tweet) =>
>>>>>>> parent of 6b87af5... Get rqs on home page
        <Tweet key={tweet.id} id={tweet.id} sender={tweet.sender} coordinates={tweet.coordinates} message={tweet.message} deleteTweet={this.deleteTweet} />)

        return (
			<div className="Tweets">
                {tweetList}
        	</div>
        );
	}
}

export default Tweets;