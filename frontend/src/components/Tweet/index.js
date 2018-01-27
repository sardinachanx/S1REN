import React from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import {Media,MediaLeft,MediaContent,MediaRight,Delete} from 'bloomer';

const Tweet = (props) => {
	return (
		<Media>
			<MediaLeft>
				<img src="http://placehold.it/70x70" />
			</MediaLeft>

			<MediaContent>
				<h3>{props.username}</h3>
				<p>Sample tweet</p>
			</MediaContent>

			<MediaRight>
				<Delete />
			</MediaRight>
		</Media>
	);
}

export default Tweet;