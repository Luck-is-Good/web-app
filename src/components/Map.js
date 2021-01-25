/* eslint-disable */import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';

const containerStyle = {
	width: '100%',
  	height: '800px'
}
 
const Indiacenter = {
	lat: 12.935504285297199,
	lng: 77.60565231958368
};

const User1center = {
	lat: 12.935,
	lng: 77.604
};
  
const icons = {
	home: {
		url : 'https://image.flaticon.com/icons/png/128/25/25694.png',
	},
    user: {
        url: 'https://www.netadmins.ca/wp-content/themes/netadmins/images/blank.png',
    },
};

function Map() {
	return (

		<LoadScript
		  googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
		>
		  <GoogleMap
			mapContainerStyle={containerStyle}
			center={Indiacenter}
			zoom={18}
		  >
			{ /* Child components, such as markers, info windows, etc. */ }
			<Marker
			  position = {Indiacenter}
			  icon = {icons.home}
			/>
			<Marker
			  position = {User1center}
			  icon = {icons.user}
			/>
		  </GoogleMap>
		</LoadScript>
		
	 )
}

export default Map