/* eslint-disable */
import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import TopNav from '../components/TopNav';
import {Cell, Column } from '@enact/ui/Layout';
import Location from '../components/Location';

const CheckLocation = kind({
	name: 'add',

	render: (props) => (
		<div {...props}>
			<Panel>
				<Column>
					<Cell size="15%" component="header">
						<TopNav />
					</Cell>
					<Cell>
						<Location/>
					</Cell>
				</Column>
			</Panel>
		</div>
	)
});

export default MoonstoneDecorator(CheckLocation) 