import React from 'react';
import 'bulma/css/bulma.css';
import {Button,Columns,Column} from 'bloomer';
import { Check, X } from 'react-feather';
import './index.css';

const Legend = (props) => {
	return (
		<Columns>
			<Column>
				<Button isColor="success">
					<Check />
				</Button>
				<span className="text-padding">Claim request</span>
			</Column>

			<Column>
				<Button isColor="danger">
					<X />
				</Button>
				<span className="text-padding">Hide request</span>
			</Column>
		</Columns>
	);
}

export default Legend;