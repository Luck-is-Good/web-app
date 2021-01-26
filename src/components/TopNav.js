/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import { Link } from "react-router-dom";
import UserButtonList from './UserButtonList';

const TopNav = kind({
	name: 'TopNav',

	render: (props) => (
		<Panel {...props}>
			<Link to="/"><IconButton >home</IconButton></Link>
			<Link to="/setting"><IconButton >gear</IconButton></Link>
			<Link to="/InputNamePage"><IconButton >plus</IconButton></Link>
			
			<UserButtonList/>
			{/*button-SideNav */}

			
			
		</Panel>
	)
});

export default TopNav;
