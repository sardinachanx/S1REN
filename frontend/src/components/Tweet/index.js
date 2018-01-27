import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Button, Box, Media, MediaContent, MediaRight} from 'bloomer';
import { Check, X } from 'react-feather';

class Tweet extends Component {
	constructor(props){
		super(props);
		this.sendDeletion = this.sendDeletion.bind(this);
	}
	sendDeletion(e){
		this.props.deleteTweet(this.props.id);
	}
	render() {
		return(
			<Box>
				<Media>
					<MediaContent>
						<h3>{this.props.username}</h3>
						<p>{this.props.content}</p>
					</MediaContent>

					<MediaRight>
						<Button isColor="success" className="is-block">
							<Check />
						</Button>
						<br />
						<Button isColor="danger" className="is-block" onClick={this.sendDeletion}>
							<X />
						</Button>
					</MediaRight>
				</Media>
			</Box>
		);
	}
}

export default Tweet;