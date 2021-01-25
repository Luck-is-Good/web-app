/* eslint-disable */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';

function Store(props) {
    //user name
    //var template = require('./CreateCode.js');
    //console.log("name " + template.foo.name);
    
    firestore.collection("USERS").doc("name").set({
      //create_date: new Date(),
      //user_id: user_id,
    })
    .then(function(docRef){
      console.log("Document written with ID: ", props.name);
    });

    return(
        <BodyText>{props.name}</BodyText>
        
    )
}

export default Store