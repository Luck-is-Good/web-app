/* eslint-disable */import React, {useState} from 'react';
/*import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';
import Input from '@enact/moonstone/Input';
import { render } from 'react-dom';
import handle from '@enact/core/handle';
import Store from "./Store";
import { __esModule } from '@enact/ui/FloatingLayer';

//랜덤으로 6자리 코드 생성(device연결코드)
var user_id = Math.random().toString(36).slice(7);
var template = {
    name : 'this.state.name',
}

class CreateCode extends React.Component {
    
	constructor(props) {
		super(props);
		this.state={name: ''};
        this.handleChange = this.handleChange.bind(this);
	}
    
	handleChange(event) {
        this.setState({name: event.target.value});
        //template.name = this.state.value;
	}
	//input value == {this.state.value}
    
    
	render() {
	    return (
        <div>
			<form>
			<input placeholder="Name" 
			onChange={this.handleChange}></input> 
			<BodyText >code: {this.state.name}</BodyText>
            </form>
            <Store name={this.state.name}/>
            <BodyText>{user_id}</BodyText>
        </div>
		
	);
	}
}

export default CreateCode;*/