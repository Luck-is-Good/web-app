/* eslint-disable */
import React, { Component } from 'react';
import Button from '@enact/moonstone/Button';
import store from '../store/store';
import { firestore } from '../db/firebase';;



class Delete extends Component {
    constructor(props){
        super(props);
    }
    deleteUser() {
        // firestore.collection("USERS").doc(userName).delete().then((res)=> {
        //     alert(this.name+ " Document successfully deleted!");
        //     let fb_users = []
        //     let user_data = []
        //     let user_locs = []
    
        //     firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
        //         snapshot.forEach((doc)=>{
        //             fb_users.push(doc.id)
        //         })
        //         console.log("first component Did Amount")
        //     }).then(()=>{
        //         fb_users.forEach((user)=>{
        //             firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "desc").limit(1)
        //             .get()
        //             .then((data)=>{
        //                 let num = 0;
        //                 data.forEach((doc)=>{
        //                     user_locs.push(doc.data());
        //                     num++;
        //                 })
        //             }).then(()=>{
        //                 if(user_locs.length == fb_users.length){
        //                     for(let i = 0; i < fb_users.length;i++){
        //                         let data = {
        //                             name:fb_users[i],
        //                             longitude: user_locs[i].longitude,
        //                             latitude: user_locs[i].latitude,
        //                             createdAt: user_locs[i].createdAt
        //                         };
                        
        //                         user_data.push(data);
        //                     }
        //                 }
        //                 if(user_data.length >= 1){
        //                     store.dispatch({ type:'USER_DELETE', users:user_data})
        //                 }
        //             })
        //         })
        //     })
    
        // }).catch(function(error) {
        //     alert("Error removing document: ", error);
        // });
    }
    
    render() {
        const {name, id, onClick} = this.props;
        return (
            <Button name={name} id={id} 
            onClick={
                function(){
                    firestore.collection("USERS").doc(name).delete().then((res)=> {
                        alert(name+ " Document successfully deleted!");
                        let fb_users = []
                        let user_data = []
                        let user_locs = []
                
                        firestore.collection("USERS").where("device_id", "!=", false).get().then((snapshot)=>{
                            snapshot.forEach((doc)=>{
                                fb_users.push(doc.id)
                            })
                            console.log("first component Did Amount")
                        }).then(()=>{
                            fb_users.forEach((user)=>{
                                firestore.collection("USERS").doc(user).collection("locations").orderBy("createdAt", "desc").limit(1)
                                .get()
                                .then((data)=>{
                                    let num = 0;
                                    data.forEach((doc)=>{
                                        user_locs.push(doc.data());
                                        num++;
                                    })
                                }).then(()=>{
                                    if(user_locs.length == fb_users.length){
                                        for(let i = 0; i < fb_users.length;i++){
                                            let data = {
                                                name:fb_users[i],
                                                longitude: user_locs[i].longitude,
                                                latitude: user_locs[i].latitude,
                                                createdAt: user_locs[i].createdAt
                                            };
                                    
                                            user_data.push(data);
                                        }
                                    }
                                    if(user_data.length >= 1){
                                        store.dispatch({ type:'USER_DELETE', users:user_data})
                                    }
                                })
                            })
                        })
                
                    }).catch(function(error) {
                        alert("Error removing document: ", error);
                    });
                }
            }>DELETE</Button>
        );
    }
}


export default Delete;