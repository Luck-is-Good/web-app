/* eslint-disable */

import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import TopNav from '../components/TopNav';
import {Row, Cell, Column} from '@enact/ui/Layout';
import {ResolutionDecorator} from '@enact/ui/resolution';
import Map from '../components/Map';
import SideNav from '../components/SideNav'

class Home extends React.Component{
	name = 'Home'

	render() {
		return(
			<div >
				<Panel >
					<Column>
						<Cell size="15%" component="header">
							<TopNav />
						</Cell>
						<Cell>
							<Row> 
								<Cell >
									<Map />
								</Cell>
								<Cell size="30%">
									<SideNav/>
								</Cell>
							</Row>
						</Cell>
					</Column>
				</Panel>
			</div>
		)	
	}
};

export default MoonstoneDecorator(Home) 

// Will have the resolution classes and will be updated when the window resizes
const AppWithResolution = ResolutionDecorator(Home);
// Will have the resolution classes for the screen at the time of render only
const AppWithStaticResolution = ResolutionDecorator({dynamic: false}, Home);
const AppWithScreenTypes = ResolutionDecorator({screenTypes: [
	{name: 'hd', pxPerRem: 16, width: 1280, height: 720, aspectRatioName: 'hdtv', base: true}
]}, Home);