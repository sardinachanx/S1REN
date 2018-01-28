import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Button, Box, Level, LevelLeft, LevelRight, LevelItem, Media, MediaContent, MediaRight} from 'bloomer';
import { Check, X, MapPin } from 'react-feather';

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
						<Level>
							<LevelLeft>
								<LevelItem><h3>{this.props.sender}</h3></LevelItem>
							</LevelLeft>
							<LevelRight>
								<LevelItem><MapPin /><span> {this.props.coordinates}</span></LevelItem>
							</LevelRight>
						</Level>
						<p>{this.props.message}</p>
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