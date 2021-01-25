/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import Input from '@enact/moonstone/Input';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';


const InputForm = kind({
	name: 'InputForm',

	render: (props) => (
		<Panel {...props}>
            <Heading>ADD USER INFO</Heading>
            <Input placeholder="Name" />
            <Input placeholder="Age" type="number"/>
            <BodyText>Maximum allowable distance</BodyText>
            <Input placeholder="KM" type="number"/>

            <Button>SAVE</Button>
            {/* Automatic creation of 
            new user buttons, pages, and routers 
            on the main panel*/}
		</Panel>
	)
});



//react code 
//X -> bind
/*
class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', age: null, distance: null};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    
    //webos : alert X
    handleSubmit(event) {
      alert('User Name:' + this.state.username + ', Age:' + this.state.age + ', Distance:' + this.state.distance);
      event.preventDefault();
    }
  
    render() {
      return (
        <Panel>
        <form>
        <Heading>ADD USER INFO</Heading>
            <Input placeholder="Name"  />
            <Input placeholder="Age"  />
            <BodyText>Maximum allowable distance</BodyText>
            <Input placeholder="KM" />
            <Button type="submit" onClick={this.handleSubmit}>SAVE</Button>
        </form>
        
        </Panel>
      );
    }
  }
  */
  



export default InputForm;
