/* eslint-disable */
import Button from '@enact/moonstone/Button';
import { Panel } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import Delete from './Delete';
import store from '../store/store';
import { firestore } from '../db/firebase';

class SideNav extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
			name: store.getState().users[store.getState().centerid].name,
			id: store.getState().centerid,
		}
		store.subscribe(function(){
			this.setState({name:store.getState().users[store.getState().centerid].name});
			this.setState({id:store.getState().centerid});
		}.bind(this));
      }
      // componentDidMount() {
	// 	this.setState({name:store.getState().users[store.getState().centerid].name});
      //       this.setState({id:store.getState().centerid});
	// }
      
      render() {
            return (
                  <Panel >
                        <Heading>USER INFO</Heading>
                        <BodyText>Name : {this.state.name}</BodyText>
                        <Delete name={this.state.name}/>
                  </Panel>
            )
      }
};

export default SideNav;