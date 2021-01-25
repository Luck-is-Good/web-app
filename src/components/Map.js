import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Indiacenter: { lat: 12.935504285297199, lng: 77.60565231958368 },
			User1center: { lat: 12.935, lng: 77.604 }
		}
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			5000	
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		if(this.state.Indiacenter === location1) {
			this.setState({
				Indiacenter: location2
			});
		} else {
			this.setState({
				Indiacenter: location1
			});
		}
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