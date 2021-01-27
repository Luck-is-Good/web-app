/* eslint-disable */
import Button from '@enact/moonstone/Button';
import { Panel } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';

class SideNav extends React.Component {
      name = 'SideNav'

      render() {
            return (
                  <Panel >
                        <Heading>USER INFO</Heading>

                        <BodyText>Name : </BodyText>
                        <BodyText>Real-time Location :</BodyText>
                        <Button>DELETE</Button>
                        
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
