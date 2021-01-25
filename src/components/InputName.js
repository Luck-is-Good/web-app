/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';

import Heading from '@enact/moonstone/Heading';
import Spinner from '@enact/moonstone/Spinner';
import {Link} from 'react-router-dom';
import Notification from '@enact/moonstone/Notification';
import Dialog from '@enact/moonstone/Dialog';


class InputName extends React.Component{

	constructor(props) {
		super(props);
		this.state={value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
    
	handleChange(event) {
        this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Name"
			onChange={this.handleChange}></input> 
			<input type="submit" value="submit"/>
			
			<BodyText >input: {this.state.value}</BodyText>
            </form>

			<Link to={{
				pathname : '/Connect',
				state : {
					inputvalue : this.state.value
				}
			}}>
			<Button>Next</Button>
			</Link>
		</div>
		);
	}
}

export default InputName;
