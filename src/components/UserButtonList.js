/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { complete, complete2 } from '../../action/todo';
import UserButton from './UserButton';
import reducer from '../reducers/reducer';


class UserButtonList extends Component {
  
  render() {
  	const {users} = this.props;
    return (
      <div>
    		{users.map(UserButton =>
    			<UserButton
                key={UserButton.id}
                {...UserButton} />
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

export default connect(UserButtonListStateToProps,null)(UserButtonList);
