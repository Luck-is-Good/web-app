/* eslint-disable */
//https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js
import React, { Component } from 'react';
import SideNav from './SideNav';
import { Panel } from '@enact/moonstone/Panels';

import Button from '@enact/moonstone/Button';
import ToggleButton from '@enact/moonstone/ToggleButton';
import RadioItem from '@enact/moonstone/RadioItem';

//https://stackoverflow.com/questions/36964689/how-to-show-hide-component-on-click-in-react-redux


class UserButton extends Component {
    
    render() {
        const {name, id, selected, onClick} = this.props;
        <SideNav id={id} name={name}/>
        return (
      
            <Button 
                onClick={() => onClick({
                id : id, 
                name : name,
                selected : !selected
            })}
            >{name}</Button>
     
        );
    }
}

export default UserButton;