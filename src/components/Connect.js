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
import { firestore } from "../db/firebase";

var userId = Math.random().toString(36).slice(7);

//랜덤으로 생성한 user_id를 firestore에 저장
//저장할 때 경로는 inputName에서 받아온 이름을 사용
//complete버튼 클릭 시 device_id 경로가 있는지 검사후 있으면 user_info 저장하는 곳으로 페이지 넘김
//실패시 다시 시도하라고 메시지 띄우기
class Connect extends React.Component{
	render() {
		const inputValue = this.props.location.state.inputvalue

      	//firestore에 user_id저장
      	firestore.collection("USERS").doc(inputValue).set({
			user_id: userId,
			device_id: null,
     	 })
      	.then(function(docRef){
      	console.log("Document written with ID: ", inputValue);
		  });
		  
		return (
		<div>
			<BodyText>user_id: {userId}</BodyText>
        	<Spinner>Connecting</Spinner>
			<p/>
			{/* When the web and app are connected, 
			a pop-up appears to confirm the location.*/}
			<Link to={{
				pathname : '/getfromfirebase',
				state : {
					userId: userId,
					inputvalue : inputValue
				}
			}}>
			<Button>complete</Button>
			</Link>
		</div>
		);
	}
}

export default Connect;

