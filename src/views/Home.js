/* eslint-disable */
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import kind from '@enact/core/kind';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import TopNav from '../components/TopNav';
import { Row, Cell, Column } from '@enact/ui/Layout';
import Map from '../components/Map';
import SideNav from '../components/SideNav'

const Home = kind({
	name: 'Home',

	render: (props) => (
		<div {...props}>
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
								<SideNav />
							</Cell>
						</Row>
					</Cell>
				</Column>
			</Panel>
		</div>
	)
})

export default MoonstoneDecorator(Home)