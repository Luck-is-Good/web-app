/* eslint-disable */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import home from '../views/Home';
import connect from '../views/Connect';
import adduserinfo from '../views/AddUserInfo';
import set from '../views/Setting';
import location from '../views/CheckLocation';

export default function App() {
	//init state from db8
	return(
		<HashRouter>
			<Switch>
				<Route exact path = "/" component ={home}/>
				<Route exact path = "/adduserinfo" component ={adduserinfo}/>
				<Route exact path = "/setting" component ={set}/>
				<Route exact path = "/connect" component ={connect}/>
				<Route exact path = "/location" component ={location}/>
			</Switch>
		</HashRouter>
	)
}