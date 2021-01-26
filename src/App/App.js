/* eslint-disable */

import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import home from '../views/Home';
import add from '../views/Add';
import add_userinfo from '../views/Add_userinfo';
import set from '../views/Setting';
import getfromfirebase from '../components/GetFromFirebase';
import connect from '../components/Connect';
import inputname from '../components/InputName';

export default function App() {
	//init state from db8
	return(
		<HashRouter>
			<Switch>
				<Route exact path = "/" component ={home}/>
				<Route exact path = "/add" component ={add}/>
				<Route exact path = "/add/userinfo" component ={add_userinfo}/>
				<Route exact path = "/setting" component ={set}/>
				<Route exact path = "/connect" component ={connect}/>
				<Route exact path = "/getfromfirebase" component ={getfromfirebase}/>
				<Route exact path = "/inputname" component ={inputname}/>
			</Switch>
		</HashRouter>
	)
}