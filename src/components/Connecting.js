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
import CreateCode from '../components/CreateCode';
import Store from "./Store";

var user_id = Math.random().toString(36).slice(7);

class Connecting extends React.Component{

	constructor(props) {
		super(props);
		this.state={name: ''};
        this.handleChange = this.handleChange.bind(this);
	}
    
	handleChange(event) {
        this.setState({name: event.target.value});
        //template.name = this.state.value;
	}

	render() {
		return (
		<div>
			<form>
			<input placeholder="Name" 
			onChange={this.handleChange}></input> 
			<BodyText >code: {this.state.name}</BodyText>
            </form>
            <BodyText>{user_id}</BodyText>
			<Store name={this.state.name}/>
        <Spinner>Connecting</Spinner>
		<p/>
		{/* When the web and app are connected, 
		a pop-up appears to confirm the location.*/}
		<Link to="/Store">
			<Button>complete</Button>
			
		</Link>
		</div>
		);
	}
}

export default Connecting;
