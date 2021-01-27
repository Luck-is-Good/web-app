/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { complete, complete2 } from '../../action/todo';
import UserButton from './UserButton';
import reducer from '../reducers/reducer';
import store from '../store/store';
import { Panel } from '@enact/moonstone/Panels';

class UserButtonList extends Component {
  render() {
    var users = store.getState().users
    console.log(users)
    return (
      <Panel>
        {users.map(users =>
          <UserButton
          id={users.id}
          name={users.name}
          lat={users.latitude}
          lng={users.longitude}/>
        )}
      </Panel>
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



export default connect(UserButtonListStateToProps,null)(UserButtonList);
