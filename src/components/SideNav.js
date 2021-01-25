import Button from '@enact/moonstone/Button';
import { Panel } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';

class Userinfo extends React.Component {
      name = 'Userinfo'

      render() {
            return (
                  <Panel >
                        <Heading>USER INFO</Heading>

                        <BodyText>Name : </BodyText>
                        <BodyText>Age :</BodyText>
                        <BodyText>Real-time Location :</BodyText>

                        <Button>See before Location</Button>
                        <p />
                        <Button>Search Shortest Path</Button>
                        <p />
                        <Button>Alert</Button>
                        <p />
                        <Button>Call</Button>
                        <p />
                        <Button>112</Button>
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

export default Userinfo;
