import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store';



const appElement = (<Provider store={store}><App /></Provider>);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
