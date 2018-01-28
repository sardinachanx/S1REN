import React from 'react';
import 'bulma/css/bulma.css';
import {Button, Control, Field, Input} from 'bloomer';

const Search = () => {
	return (
        <Field hasAddons>
            <Control isExpanded>
                <Input type="text" placeholder="Search for a keyword" />
            </Control>
            <Control>
                <Button isColor="info">Search</Button>
            </Control>
        </Field>
	);
}

export default Search;