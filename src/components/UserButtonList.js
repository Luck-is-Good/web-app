/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    console.log(store.getState());
    return (
      <div>
        {this.state.users.map(user =>
          <UserButton
          id={user.id}
          name={user.name}/>
        )}
      </div>
    );
  }
}

const UserButtonListStateToProps = (state) => {
  return {
    users: state.users
  }
}


/*
const UserButtonListDispatchToProps = (dispatch) => {
    return {
        onClick(data){
          // dispatch(complete2(data))
          //dispatch(complete(data))
        }
    }
}
*/

export default UserButtonList;
//export default connect(UserButtonListStateToProps,null)(UserButtonList);