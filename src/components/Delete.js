/* eslint-disable */
import React, { Component } from 'react';
import Button from '@enact/moonstone/Button';
import store from '../store/store';

class Delete extends Component {
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

            <Button id={id} onClick={
                function(){ store.dispatch({type:'USER_DELETE', name:name, id:id});
              }}>DELETE</Button>
        );
    }
}


export default Delete;