/* eslint-disable */

import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import home from '../views/Home';
import add from '../views/Add';
import add_userinfo from '../views/Add_userinfo';
import set from '../views/Setting';
import getfromfirebase from '../components/GetFromFirebase';
import InputName from '../components/InputName';
import Connect from '../components/Connect';
import InputNamePage from '../views/InputNamePage';
import ConnectPage from '../views/ConnectPage';

export default function App() {
	//init state from db8
	return(
		<HashRouter>
			<Switch>
				<Route exact path = "/" component ={home}/>
				<Route exact path = "/add" component ={add}/>
				<Route exact path = "/add/userinfo" component ={add_userinfo}/>
				<Route exact path = "/setting" component ={set}/>
				<Route exact path = "/getfromfirebase" component ={getfromfirebase}/>
				<Route exact path = "/InputName" component ={InputName}/>
				<Route exact path = "/Connect" component ={Connect}/>
				<Route exact path = "/InputNamePage" component ={InputNamePage}/>
				<Route exact path = "/ConnectPage" component ={ConnectPage}/>
			</Switch>
		</HashRouter>
	)
}