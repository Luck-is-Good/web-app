/* eslint-disable */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import {Row, Cell, Column} from '@enact/ui/Layout';
import {ResolutionDecorator} from '@enact/ui/resolution';
import Connecting from '../components/Connecting';
import TopNav from '../components/TopNav';

const Home = kind({
	name: 'home',

	render: (props) => (
		<div {...props}>
			<Panel>
			<Column>
				<Cell size="15%" component="header">
					<TopNav />
				</Cell>
				<Cell>
					<Row style={{height: '100%'}}> 
						<Cell >
							<Connecting/>
						</Cell>
						{/*home : no right side */}
					</Row>
				</Cell>
			</Column>
			</Panel>
		</div>
	)
});

export default MoonstoneDecorator(Home) 

// Will have the resolution classes and will be updated when the window resizes
const AppWithResolution = ResolutionDecorator(Home);
// Will have the resolution classes for the screen at the time of render only
const AppWithStaticResolution = ResolutionDecorator({dynamic: false}, Home);
const AppWithScreenTypes = ResolutionDecorator({screenTypes: [
	{name: 'hd', pxPerRem: 16, width: 1280, height: 720, aspectRatioName: 'hdtv', base: true}
]}, Home);