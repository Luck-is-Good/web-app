/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import Button from '@enact/moonstone/Button';
import store from '../store/store';

class UserButton extends Component {
    render() {
        const {name, id, lat, lng, user, onClick} = this.props;
        return (
            <Button id={id}
                onClick={
                function(){ store.dispatch({type:'USER_SELECT', lat: lat, lng: lng, name:name, id:id});
              }} >{name}</Button>
        );
    }
}

export default UserButton;