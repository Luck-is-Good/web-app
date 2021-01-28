/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import Button from '@enact/moonstone/Button';
import store from '../store/store';

class UserButton extends Component {
    render() {
        const {name, id, onClick} = this.props;
        return (
            /*
            <li id={id} 
                onClick={() => onClick({
                    id : id, 
                    complete : !complete
                })}
                className={!!complete ? 'completed' : ''}
            >{todo}</li>
            */

            <Button key = {id} id={id} onClick={
                function(){ store.dispatch({type:'USER_SELECT', centerid: id});
              }}>{name}</Button>
        );
    }
}

export default UserButton;