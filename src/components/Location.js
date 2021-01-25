/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import {Link} from 'react-router-dom';

/*
const Location = kind({
	name: 'Location',
	
	handleClickNo(event) {
		//click No -> error 
		alert('error : wrong location');
		
	},

	render: (props) => (
		<Panel {...props}>
			<BodyText>Your current location</BodyText>
			<Button>YES</Button>
			<Button>NO</Button>
			
		</Panel>
	)
});
*/

class Location extends React.Component {
	constructor(props) {
	  super(props);
  
	  //this.state = {showInputForm: false};
  
	  this.handleClickNo = this.handleClickNo.bind(this);
	}
	

	handleClickNo(event) {
	  //click No -> error 
	  alert('error : wrong location');
	}
	
	render() {
	  return (
		<Panel >
			<BodyText>Your current location</BodyText>

			<Link to="/add/userinfo"><Button>YES</Button></Link>

			<Button onClick={this.handleClickNo}>NO</Button>
		</Panel>
	  );
	}
  }

export default Location;
