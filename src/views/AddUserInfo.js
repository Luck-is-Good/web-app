/* eslint-disable */
import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import TopNav from '../components/TopNav';
import { Row, Cell, Column } from '@enact/ui/Layout';
import Map from '../components/Map';
import InputName from '../components/InputName';

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
							<Cell size="70%">
								<Map />
							</Cell>
							<Cell>
								<Row>
									<Cell size="20px"><p /></Cell>
									<Cell>
										<InputName/>
									</Cell>
								</Row>
							</Cell>
						</Row>
					</Cell>
				</Column>
			</Panel>
		</div>
	)
});

export default MoonstoneDecorator(Add_userinfo) 