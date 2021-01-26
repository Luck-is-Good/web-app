/* eslint-disable */
import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import TopNav from '../components/TopNav';
import {Row, Cell, Column} from '@enact/ui/Layout';
import Map from '../components/Map';
import InputForm from '../components/InputForm';

const Add_userinfo = kind({
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
						<InputForm/>
					</Cell>
				</Row>
				</Cell>
			</Column>
			</Panel>
		</div>
	)
});

export default MoonstoneDecorator(Add_userinfo) 