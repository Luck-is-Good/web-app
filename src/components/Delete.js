/* eslint-disable */
import React, { Component } from 'react';
import Button from '@enact/moonstone/Button';
import store from '../store/store';
import { firestore } from '../db/firebase';;

class Delete extends Component {
    delete() {
        firestore.collection("USERS").doc(user).delete().then(function() {
            alert("Document successfully deleted!");
            //store.dispatch
        }).catch(function(error) {
            alert("Error removing document: ", error);
        });
    }
    
    render() {
        const {name, id, onClick} = this.props;
        return (
            <Button name={name} id={id} 
            onClick={this.delete} >DELETE</Button>
        );
    }
}


export default Delete;