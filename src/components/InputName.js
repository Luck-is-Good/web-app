/* eslint-disable */
import Button from '@enact/moonstone/Button';
import Heading from '@enact/moonstone/Heading';
import React from 'react';
import { Link } from "react-router-dom";
import css from './InputName.css';

class InputName extends React.Component{

	constructor(props) {
		super(props);
		this.state={value: ''};
		this.handleChange = this.handleChange.bind(this);
	}
    
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
		<div>
			<Heading>Input User Name</Heading>
			<p/>
			<input className={css.inputForm} type="text" placeholder="Name" onChange={this.handleChange}></input> 
			<Link to={{
				pathname : '/connect',
				name : this.state.value
			}}>
			<p/>
			<Button>Next</Button>
			</Link>
		</div>
		);
	}
}

export default InputName;
