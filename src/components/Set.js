/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import ExpandablePicker from '@enact/moonstone/ExpandablePicker';

class Set extends React.Component {
    
	constructor(props) {
	  super(props);

      this.handlePickSkinColor = this.handlePickSkinColor.bind(this);
      this.handlePickTextSize = this.handlePickTextSize.bind(this);
    }

    handlePickSkinColor(props) {
        alert(props.value)
      }

	handlePickTextSize(props) {
        alert(props.value)
	}
	
	render() {
	  return (
		<Panel>
            <Heading>Setting</Heading>
            <p/>
            
            <ExpandablePicker
                joined
                title="Text Size"
                width="large"
                onChange={this.handlePickTextSize}
            >
                {['Default : normal', 'large']}
            </ExpandablePicker>
            <p/>

            <ExpandablePicker
                joined
                title="Skin Color"
                width="large"
                onChange={this.handlePickSkinColor}
            >
                {['Default : dark', 'light']}
            </ExpandablePicker>
		</Panel>
        )
    }
}

export default Set;