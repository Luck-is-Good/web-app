/* eslint-disable */
import Button from '@enact/moonstone/Button';
import { Panel } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import store from '../store/store';
import { connect } from 'react-redux';

class SideNav extends React.Component {
      render() {
            const {name, id, selected, onClick} = this.props;
            return (
                  <Panel >
                        <Heading>USER INFO 
                        </Heading>

                        <BodyText>Name : {name}</BodyText>

                        
                        <BodyText>Real-time Location :</BodyText>
                        <Button>DELETE</Button>
                  </Panel>
            )
      }
};

const SideNavStateToProps = (state) => {
      return {
        users: state.data.users
      }
}

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

export default connect(SideNavStateToProps,null)(SideNav);
