/* eslint-disable */
import Button from '@enact/moonstone/Button';
import { Panel } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import store from '../store/store';
import { Row, Cell, Column } from '@enact/ui/Layout';

const containerStyle = {
	width: '100%',
	height: '800px'
}

const icons = {
	user: {
		url: 'https://www.netadmins.ca/wp-content/themes/netadmins/images/blank.png',
	},
};

class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: {
				latitue: 0,
				longitude: 0
			}
		}
		this.handleClickNo = this.handleClickNo.bind(this);
	}

	componentDidMount() {
		store.subscribe(function () {
			this.setState({
				current: store.getState().current
			})
		}.bind(this))
	}


	handleClickNo(event) {
		//click No -> error 
		alert('error : wrong location');
	}

	render() {
		return (
			<Row>
				<Cell size="70%">
					<LoadScript
						googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
					>
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={this.state.current}
							zoom={15}
						>

							<Marker
								position={this.state.current}
								icon={icons.user}
							/>
						</GoogleMap>
					</LoadScript>
				</Cell>
				<Cell>
					<Panel >
						<BodyText>Your current location</BodyText>
						<Link to="/"><Button>YES</Button></Link>
						<Button onClick={this.handleClickNo}>NO</Button>
					</Panel>
				</Cell>
			</Row>
		)
	}
}

export default Location;
