/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { complete, complete2 } from '../../action/todo';
import UserButton from './UserButton';
import reducer from '../reducers/reducer';
import store from '../store/store';


class UserButtonList extends Component {
  render() {
    var users = store.getState().data.users
    console.log(users)
    return (
      <div>
    		
        <UserButton
        id={users[0].id}
        name={users[0].name} />
      </div>
    );
  }
}


const UserButtonListStateToProps = (state) => {
  return {
    users: state.data.users
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

export default connect(UserButtonListStateToProps,null)(UserButtonList);
