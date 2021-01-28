/* eslint-disable */
import Button from '@enact/moonstone/Button';
import { Panel } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import Delete from './Delete';
import store from '../store/store';

class SideNav extends React.Component {
      
      constructor(props) {
            super(props);
            this.state = {
			name: store.getState().name,
			id: store.getState().id,
		}
		store.subscribe(function(){
			this.setState({name:store.getState().name});
			this.setState({id:store.getState().id});
		}.bind(this));
	}
      
      render() {
            return (
                  <Panel >
                        <Heading>USER INFO</Heading>

                        <BodyText>Name : {this.state.name}</BodyText>
                        <BodyText>Real-time Location :</BodyText>
                        <Delete/>
                       
                  </Panel>
            )
      }
};

// function loadInfo() {
//       let userName;

//       firestore
//       .collection('USERS')
//       .doc('test1')
//       .get()
//       .then(doc => {
//             if(doc.data()){
//                   userName = doc.data().user_id;
//             }
//       });

//       return userName;
// }

export default SideNav;
