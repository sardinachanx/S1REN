import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import {Box, Media,MediaLeft,MediaContent,MediaRight,Delete} from 'bloomer';

const Tweet = (props) => {
	return (
		<Box>
			<Media>
				<MediaLeft>
					<img src="http://placehold.it/70x70" />
				</MediaLeft>

				<MediaContent>
					<h3>{props.username}</h3>
					<p>{props.content}</p>
				</MediaContent>

				<MediaRight>
					<Delete />
				</MediaRight>
			</Media>
		</Box>
	);
}

export default Tweet;