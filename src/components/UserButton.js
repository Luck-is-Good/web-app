/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import Button from '@enact/moonstone/Button';


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

            <Button id={id}
            //onClick={() => onClick({
                /*route -> SideNav*/
            //})}
            >{name}</Button>
        );
    }
}

export default UserButton;