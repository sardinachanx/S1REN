import React from 'react';
import 'bulma/css/bulma.css';
import {Button, Box, Media, MediaLeft, MediaContent, MediaRight} from 'bloomer';
import { Check, X } from 'react-feather';

const Tweet = (props) => {
	return (
		<Box>
			<Media>
				<MediaLeft>
					<img src="http://placehold.it/70x70" alt="profile"/>
				</MediaLeft>

				<MediaContent>
					<h3>{props.username}</h3>
					<p>{props.content}</p>
				</MediaContent>

				<MediaRight>
					<Button isColor="success" className="is-block">
						<Check />
					</Button>
					<br />
					<Button isColor="danger" className="is-block">
						<X />
					</Button>
				</MediaRight>
			</Media>
		</Box>
	);
}

export default Tweet;