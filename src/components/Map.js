import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {firestore} from '../db/firebase';

const containerStyle = {
	width: '100%',
	height: '800px'
}

const location1 = {
	lat: 12.935504285297199,
	lng: 77.60565231958368
}

const location2 = {
	lat: 12.935,
	lng: 77.604
}

const icons = {
	home: {
		url: 'https://image.flaticon.com/icons/png/128/25/25694.png',
	},
	user: {
		url: 'https://www.netadmins.ca/wp-content/themes/netadmins/images/blank.png',
	},
};

var timerID;
let locations = [];

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			Indiacenter: { lat: 12.935504285297199, lng: 77.60565231958368 },
			User1center: { lat: 12.935, lng: 77.604 }
		}
	}

	/* 컴포넌트 생성 시 실행되는 부분
	   1. 타이머 설정: 5초마다 updateLocation() 실행
	   2. firebase에서 위치 정보 가지고 옴 */
	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateLocation(this.state.count),
			5000
		);

		firestore
			.collection("USERS" + "/test1" + "/locations")
			.orderBy("createdAt", "asc")
			.get()
			.then((docs) => {
				var i = 0;
				docs.forEach((doc) => {
					locations.push({ lat: doc.data().latitude, lng: doc.data().longitude });
					//console.log("locations => ", locations[i].lat, locations[i].lng);
					i = i + 1;
				});
			});	
	}

	// 컴포넌트 언마운트 될 때 타이머 소멸
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// time interval마다 실행될 함수
	updateLocation(i) {
		if(i < locations.length){
			this.setState({
				Indiacenter: locations[i],
				count: i + 1
			})
		}
		else {
			this.setState({
				Indiacenter: locations[0],
				count: 0
			})
		}
		console.log("current location: ", locations[i].lat, locations[i].lng);
		
	}

	render() {
		return (
			<LoadScript
				googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
			>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={this.state.Indiacenter}
					zoom={18}
				>
					{ /* Child components, such as markers, info windows, etc. */}
					<Marker
						position={this.state.Indiacenter}
						icon={icons.home}
					/>
					<Marker
						position={this.state.User1center}
						icon={icons.user}
					/>
				</GoogleMap>
			</LoadScript>
		);
	}
}

export default Map;