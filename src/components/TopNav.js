/* eslint-disable */
import { Panel } from '@enact/moonstone/Panels';
import React, { Component } from 'react';
import IconButton from '@enact/moonstone/IconButton';
import { Link } from "react-router-dom";
import UserButtonList from './UserButtonList';
import { firestore } from '../db/firebase';
import store from '../store/store';
import { Row, Cell } from '@enact/ui/Layout';

var _users = [];

class TopNav extends Component {

	// componentDidMount() {
	// 	firestore
	// 		.collection("USERS").limit(3)
	// 		.get()
	// 		.then((docs) => {
	// 			docs.forEach((doc) => {
	// 				_users.push({ name: doc.id, data: doc.data() });
	// 			});
	// 		});
	// 	store.dispatch({ type: 'LOAD_USERLIST', users: _users });
	// }
	componentDidMount() {
		let fb_users = []
		let user_data = []
		let user_locs = []

		firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
			snapshot.forEach((doc)=>{
				fb_users.push(doc.id);
			})
		}).then(()=>{		
			fb_users.forEach((user)=>{
				firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "asc").limit(1)
				.get()
				.then((data)=>{
					data.forEach((doc)=>{
						user_locs.push(doc.data());
					})
				}).then(()=>{
					if(user_locs.length == fb_users.length){
						for(let i = 0; i < fb_users.length;i++){
							let data = {
								name:fb_users[i],
								longitude: user_locs[i].longitude,
								latitude: user_locs[i].latitude,
								createdAt: user_locs[i].createdAt
							};				
							user_data.push(data);
						}
					}
					store.dispatch({ type:'UPDATE_LOC', users:user_data})
				})
			})
		})
	}

	render() {
		return (
			<div>
				<p />
				<Row>
					<Cell size="10px"></Cell>
					<Cell size="20%">
						<Link to="/"><IconButton size="small">home</IconButton></Link>
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