/* eslint-disable */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import TopNav from '../components/TopNav';
import {Row, Cell, Column} from '@enact/ui/Layout';
import {ResolutionDecorator} from '@enact/ui/resolution';
import Map from '../components/Map';
import Location from '../components/Location';

const Add = kind({
	name: 'add',

	render: (props) => (
		<div {...props}>
			<Panel>
			<Column>
				<Cell size="15%" component="header">
					<TopNav />
					{/*react-router-nested : change right side*/}
				</Cell>
				<Cell>
				<Row> 
					<Cell >
						<Map />
					</Cell>
					<Cell size="30%">
						<Location/>
					</Cell>
				</Row>
				</Cell>
			</Column>
			</Panel>
		</div>
	)
});

export default MoonstoneDecorator(Add) 

// Will have the resolution classes and will be updated when the window resizes
const AppWithResolution = ResolutionDecorator(Add);
// Will have the resolution classes for the screen at the time of render only
const AppWithStaticResolution = ResolutionDecorator({dynamic: false}, Add);
const AppWithScreenTypes = ResolutionDecorator({screenTypes: [
	{name: 'hd', pxPerRem: 16, width: 1280, height: 720, aspectRatioName: 'hdtv', base: true}
]}, Add);