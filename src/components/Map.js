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
			Users: []
		}

		store.subscribe(function(){
			this.setState({Users:store.getState().users});
			this.setState({selected:store.getState().centerid})
		}.bind(this));
	}

	/* 컴포넌트 생성 후 실행되는 부분
	   1. 타이머 설정: 5초마다 updateLocation() 실행
	   2. firebase에서 위치 정보 가지고 옴 */
	componentDidMount() {
		let fb_users = []
		let user_data = []
		let user_locs = []

		this.timerID = setInterval(this.updateLocation(),5000);

		firestore
			.collection("USERS" + "/test1" + "/locations")
			.orderBy("createdAt", "asc")
			.get()
			.then((docs) => {
				docs.forEach((doc) => {
					locations.push({ lat: doc.data().latitude, lng: doc.data().longitude });
				});
			});

		firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
			snapshot.forEach((doc)=>{
				fb_users.push(doc.id)
			})
		}).then(()=>{
		
			fb_users.forEach((user)=>{
				firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "desc").limit(1)
				.get()
				.then((data)=>{
					data.forEach((doc)=>{
						// console.log(doc.data())
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
					console.log(user_data);
					store.dispatch({ type:'UPDATE_LOC', users:user_data})
				})
			})
		})
	}

	// componentDidUpdate(){
	// 	var users = store.getState().data.users;
	// 	const user = users.find(whereid);
	// 	lat = user.latitude;
	// 	lng = user.longitude;
	// 	this.setState({center:{lat, lng}});
	// }

	// 컴포넌트 언마운트 될 때 타이머 소멸
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// time interval마다 실행될 함수
	updateLocation(i) {
		let fb_users = []
		let user_data = []
		let user_locs = []

		firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
			snapshot.forEach((doc)=>{
				fb_users.push(doc.id)
			})
		}).then(()=>{
		
			fb_users.forEach((user)=>{
				firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "desc").limit(1)
				.get()
				.then((data)=>{
					data.forEach((doc)=>{
						// console.log(doc.data())
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
					console.log(user_data);
					store.dispatch({ type:'UPDATE_LOC', users:user_data})
				})
			})
		})
		
		this.setState({
			Homecenter: {lng:store.getState().users[this.state.selected].longitude, lat:store.getState().users[this.state.selected].latitude}
		})
	
		//console.log("current location: ", locations[i].lat, locations[i].lng);
	}

	render() {
		return (
			<LoadScript
				googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
			>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={this.state.Homecenter}
					zoom={18}
				>
					{this.state.Users.map(user =>
						<Marker
						position={{ lat: user.latitude, lng: user.longitude}}
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