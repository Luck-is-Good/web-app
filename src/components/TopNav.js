/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import { Link } from "react-router-dom";

const TopNav = kind({
	name: 'TopNav',

	render: (props) => (
		<Panel {...props}>
			<Link to="/"><IconButton >home</IconButton></Link>
			<Link to="/setting"><IconButton >gear</IconButton></Link>
			<Link to="/connecting"><IconButton >plus</IconButton></Link>
			
			{/*use repeater*/}

			<Link to="/user1"><Button >USER1</Button></Link>
			
		</Panel>
	)
});

export default TopNav;
