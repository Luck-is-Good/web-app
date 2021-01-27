/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import { Link } from "react-router-dom";
import UserButtonList from './UserButtonList';
import map from './Map';
import store from '../store/store';

const TopNav = kind({
	name: 'TopNav',

	render: (props) => (
		<Panel {...props}>
			<Link to="/"><IconButton onClick={
                function(){ store.dispatch({type:'USER_SELECT', lat: 35.887653204936996, lng: 128.612698669104});
              }}>home</IconButton></Link>
			<Link to="/setting"><IconButton >gear</IconButton></Link>
			<Link to="/inputname"><IconButton >plus</IconButton></Link>
			
			<UserButtonList/>
			{/*button-SideNav */}

			
			
		</Panel>
	)
});

export default TopNav;
