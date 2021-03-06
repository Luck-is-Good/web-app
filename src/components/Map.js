/* eslint-disable */
import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { firestore } from '../db/firebase';
import store from '../store/store';

const containerStyle = {
	width: '100%',
	height: '800px'
}

const icons = {
	home: {
		url: 'https://image.flaticon.com/icons/png/128/25/25694.png',
	},
	user: {
		url: 'https://www.netadmins.ca/wp-content/themes/netadmins/images/blank.png',
	},
};

let locations = [];

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			Homecenter: { lat: 35.887653204936996, lng: 128.612698669104},
			Users: [],
			lat: store.getState().lat,
			lng: store.getState().lng,
			selectedname: store.getState().selectedname
		}

		store.subscribe(function(){
			this.setState({Users:store.getState().users})
			this.setState({selected:store.getState().centerid})
			this.setState({lat:store.getState().lat})
			this.setState({lng:store.getState().lng})
			this.setState({selectedname:store.getState().selectedname})
		}.bind(this));
	}

	/* 컴포넌트 생성 후 실행되는 부분
	   1. 타이머 설정: 5초마다 updateLocation() 실행
	   2. firebase에서 위치 정보 가지고 옴 */
	componentDidMount() {
		let fb_users = []
		let user_data = []
		let user_locs = []

		this.timerID = setInterval(this.updateLocation,5000);

		firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
			snapshot.forEach((doc)=>{
				fb_users.push(doc.id)
			})
			console.log("first component Did Amount")
		}).then(()=>{
			fb_users.forEach((user)=>{
				firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "desc").limit(1)
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
					if(user_data.length >= 1){
						store.dispatch({ type:'UPDATE_USER_LIST', users:user_data})
					}
				})
			})
		})
	}

	// time interval마다 실행될 함수
	updateLocation() {
		let fb_users = []
		let user_data = []
		let user_locs = []
		firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
			snapshot.forEach((doc)=>{
				fb_users.push(doc.id)
			})
		}).then(()=>{
			console.log("first update location")
			fb_users.forEach((user)=>{
				firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "desc").limit(1)
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
					if(user_data.length >= 1){
						store.dispatch({ type:'UPDATE_LOC', users:user_data})
					}
				})
			})
		})
		
		// this.state.setState({
		// 	Homecenter: {lng:this.state.Users[this.state.selected].longitude, lat:this.state.Users[this.state.selected].latitude}
		// })
		// alert("hi this is keep loaded")
	}

	render() {
		return (
			<LoadScript
				googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
			>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={{lat: this.state.lat, lng: this.state.lng}}
					zoom={18}
				>
					{this.state.Users.map(user =>
						<Marker
						position={{lat: user.latitude, lng: user.longitude}}
						icon={icons.user}/>
					)}

					<Marker
						position={this.state.Homecenter}
						icon={icons.home}
					/>
					
				</GoogleMap>
			</LoadScript>
		);
	}
}

export default Map;