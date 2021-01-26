/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { complete, complete2 } from '../../action/todo';
import UserButton from './UserButton';
import store from '../store/store';
import { Panel } from '@enact/moonstone/Panels';
import {_selected} from '../actions/index';

var users = store.getState().data.users
class UserButtonList extends Component {
  render() {
    
    console.log(users)
    const {onClick} = this.props;
    return (
      <Panel>
        {users.map(users => 
        <UserButton id={users.id} name={users.name} selcted={users.selcted} onClick={onClick}/>)}
      </Panel>
    );
  }
}


const UserButtonListStateToProps = (state) => {
  return {
    users: state.data.users
  }
}



const UserButtonListDispatchToProps = (dispatch) => {
    return {
        onClick(data){
          // dispatch(complete2(data))
          dispatch(_selected(data))
          console.log(users)
        }
    }
}




export default connect(UserButtonListStateToProps,UserButtonListDispatchToProps)(UserButtonList);
