/* eslint-disable */

import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import home from '../views/Home';
import add from '../views/Add';
import add_userinfo from '../views/Add_userinfo';
import set from '../views/Setting';
import connecting from '../views/Connecting';
import store from '../components/Store';

export default function App() {
	return(
		<HashRouter>
			<Switch>
				<Route exact path = "/" component ={home}/>
				<Route exact path = "/add" component ={add}/>
				<Route exact path = "/add/userinfo" component ={add_userinfo}/>
				<Route exact path = "/setting" component ={set}/>
				<Route exact path = "/connecting" component ={connecting}/>
				<Route exact path = "/store" component ={store}/>
			</Switch>
		</HashRouter>
	)
}