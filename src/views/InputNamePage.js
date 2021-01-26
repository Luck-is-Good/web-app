/* eslint-disable */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {ResolutionDecorator} from '@enact/ui/resolution';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import {Row, Cell, Column} from '@enact/ui/Layout';

import TopNav from '../components/TopNav';
import InputName from '../components/InputName';

const InputNamePage = kind({
	name: 'home',

	render: (props) => (
		<div {...props}>
			<Panel>
			<Column>
				<Cell size="15%" component="header">
					
				</Cell>
				<Cell>
					<Row style={{height: '100%'}}> 
						<Cell >
							<InputName/>
						</Cell>
						{/*home : no right side */}
					</Row>
				</Cell>
			</Column>
			</Panel>
		</div>
	)
});

export default MoonstoneDecorator(InputNamePage) 

// Will have the resolution classes and will be updated when the window resizes
const AppWithResolution = ResolutionDecorator(InputNamePage);
// Will have the resolution classes for the screen at the time of render only
const AppWithStaticResolution = ResolutionDecorator({dynamic: false}, InputNamePage);
const AppWithScreenTypes = ResolutionDecorator({screenTypes: [
	{name: 'hd', pxPerRem: 16, width: 1280, height: 720, aspectRatioName: 'hdtv', base: true}
]}, InputNamePage);