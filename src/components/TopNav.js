/* eslint-disable */
import { Panel } from '@enact/moonstone/Panels';
import React, { Component } from 'react';
import IconButton from '@enact/moonstone/IconButton';
import { Link } from "react-router-dom";
import UserButtonList from './UserButtonList';
import { firestore } from '../db/firebase';
import store from '../store/store';
import { Row, Cell } from '@enact/ui/Layout';
import map from './Map';

var _users = [];

class TopNav extends Component {
	render() {
		return (
			<div>
				<p />
				<Row>
					<Cell size="10px"></Cell>
					<Cell size="15%">
						<Link to="/"><IconButton onClick={function(){
							console.log("set home function in")
							{ store.dispatch({type:'SET_HOME', lat: 35.887653204936996, lng: 128.612698669104})};
						}}>home</IconButton></Link>
						<Link to="/setting"><IconButton >gear</IconButton></Link>
						<Link to="/adduserinfo"><IconButton >plus</IconButton></Link>
					</Cell>
					<Cell>
						<UserButtonList/>
					</Cell>
				</Row>
			</div>
		)
	}
}

export default TopNav;