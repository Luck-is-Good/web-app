/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';

import Heading from '@enact/moonstone/Heading';
import Spinner from '@enact/moonstone/Spinner';
import { Link } from 'react-router-dom';
import Notification from '@enact/moonstone/Notification';
import Dialog from '@enact/moonstone/Dialog';
import { withRouter } from 'react-router-dom';
import { firestore } from "../db/firebase";
import store from '../store/store';


//랜덤으로 생성한 user_id를 firestore에 저장
//저장할 때 경로는 inputName에서 받아온 이름을 사용
//complete버튼 클릭 시 device_id 경로가 있는지 검사후 있으면 user_info 저장하는 곳으로 페이지 넘김
//실패시 다시 시도하라고 메시지 띄우기

class Connect extends React.Component {
	constructor(props) {
		super(props);
		this.handOnClick = this.handOnClick.bind(this);
	}

	handOnClick() {
		firestore.collection("USERS").doc(this.props.name)
		.get()
		.then(doc => {
			if(doc.data().device_id == null){
				console.log(this.props.name);
			}
			else{
				firestore.collection("USERS").doc(this.props.name)
				.collection("locations")
				.orderBy("createdAt", "desc").limit(1)
				.get()
				.then((data)=>{
					data.forEach((doc)=>{
						var current = {
							lat: doc.data().latitude,
							lng: doc.data().longitude
						}
						store.dispatch({type: 'LOAD_LOC', current: current})
					})
				});
				this.props.history.push('/location');
			}
		})
	}

	render() {
		const name = this.props.name;
		var userId = Math.random().toString(36).slice(7);

		// firestore에 user_id저장
		firestore.collection("USERS").doc(name).set({
			user_id: userId,
			device_id: null,
		})
			.then(function () {
				console.log("Document written with ID: ", name);
			});

		return (
			<div>
				<Heading>user_id:  {userId}</Heading>
				<p />
				<div>
					<Spinner>Connecting</Spinner>
				</div>
				<Button onClick={this.handOnClick}>complete</Button>
			</div>
		);
	}
}

export default withRouter(Connect);