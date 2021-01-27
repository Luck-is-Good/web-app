/* eslint-disable */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import { Link } from "react-router-dom";
import IconButton from '@enact/moonstone/IconButton';
import BodyText from '@enact/moonstone/BodyText';




class GetFromFirebase extends React.Component { 
    render() {
      const inputValue = this.props.location.state.inputvalue;
      const userId = this.props.location.state.userId;

      //let tasksData = [];

    // firestore.js에서 가져온 firestore 객체
    firestore
      .collection("USERS")
      .where('device_id', '!=', null) // "tasks" 컬렉션 반환
        .get() // "tasks" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
        .then((docs) => {
        // forEach 함수로 각각의 다큐먼트에 함수 실행
        docs.forEach((doc) => {
            // data(), id로 다큐먼트 필드, id 조회
         if(doc.data().user_id == userId){
            console.log("doc data => " , doc.data().user_id);
         }
      });
   });

   //위치 불러오기
   firestore
      .collection("USERS" + "/test1" + "/locations")
      .orderBy("createdAt", "desc").limit(1) // "tasks" 컬렉션 반환
        .get() // "tasks" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
        .then((docs) => {
        // forEach 함수로 각각의 다큐먼트에 함수 실행
        docs.forEach((doc) => {
            // data(), id로 다큐먼트 필드, id 조회
            //tasksData.push({ lat: doc.data().latitude, lng: doc.data().longitude });
            console.log("doc data => " , doc.data());
            console.log("locations => ", doc.data().latitude);
      });
        // tasks state에 받아온 데이터 추가
        //setTasks((prevTasks) => prevTasks.concat(tasksData));
   });

      return(
        <div>
        <BodyText>
          user_id : {this.props.location.state.userId}
          <br/>
          input value :{this.props.location.state.inputvalue}
        </BodyText>
        <Link to="/"><IconButton >home</IconButton></Link>
        </div>  
        
       );
    }
    
}



export default GetFromFirebase;