import React from "react";
import { render } from "react-dom";

import {Main} from "./components/Main";
import {User} from "./components/User";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "Max"
		};
	}

	changeUsername(newName) {
		this.setState({
			username: newName
		});


		store.dispatch({
			type: "ADD",
			payload: 32
		});

	}

	render() {
		return (
			<div className="container">
				<Main changeUsername={this.changeUsername.bind(this)}/>
				<User username={this.state.username}/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));



//Redux stuff below!!

import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

const mathReducer = (state = {	//initialises state for the first time es6
		result: 1,
		lastValues: []
	}, action) => 
{
	switch(action.type) {
		case "ADD": 
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
};

const userReducer = (state = {	//initialises state for the first time es6
		name: "Max",
		age: 7
	}, action) => 
{
	switch(action.type) {
		case "SET_NAME": 
			state = {
				...state,
				name: action.payload,
			};
			break;
		case "SET_AGE":
			state = {
				...state,
				age: action.payload
			};
			break;
	}
	return state;
};

				//redux expects "3 functions". store next and action are all availble in the function body
const myLogger = (store) => (next) => (action) => {
	console.log("Logged Action: ", action);
	next(action);
};

const store = createStore(combineReducers(
		{mathReducer, userReducer}),
		{},
		applyMiddleware(myLogger, logger())
		);

store.subscribe(() => {
	//console.log("Store updated!", store.getState());
});