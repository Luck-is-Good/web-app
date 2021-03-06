/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
//import { complete, complete2 } from '../../action/todo';
import UserButton from './UserButton';
import store from '../store/store';

class UserButtonList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    store.subscribe(function(){
      this.setState({
        users: store.getState().users
      })
    }.bind(this))
  }

  render() {
    return (
      <div>
        {this.state.users.map((user,index) =>
          <UserButton
          id={index}
          name={user.name}
          lat={user.latitude}
          lng={user.longitude}/>

        )}
      </div>
    );
  }
}

export default UserButtonList;
