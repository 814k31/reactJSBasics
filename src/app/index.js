import React from "react";
import {render} from "react-dom";

import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./components/App";

//create a reducer for maths equations
//initialises state for the first time es6
const mathReducer = (state = {	
		result: 1,
		lastValues: []
	}, action) => {
	switch(action.type) {
		case "ADD":
		/* ...state initializes the new state with the old state values*/
			state = {
				...state,
				/* result: sets the new result*/
				result: state.result + action.payload,
				//lastValues: adds to the array
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

//create a reducer to simulate a user

const userReducer = (state = {	/*state = {} initialises state for the first time es6*/

		name: "Max",
		age: 27
	}, action) => 
{
	switch(action.type) {
		case "SET_NAME": 
			state = {
				...state,
				/*set the name to be the new name that is triggered*/
				name: action.payload,
			};
			break;
		case "SET_AGE":
			state = {
				...state,
				//set the new age
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

//create the redux store using combinedReducers to add multiple reducers
//Use applyMiddleware to add console logging when actions are triggered.
const store = createStore(
	combineReducers({mathReducer, userReducer}),
	{},
	applyMiddleware(logger())
);

//triggered everytime the store gets updated
store.subscribe(() => {
	//console.log("Store updated!", store.getState());
});

//use a provider to pass the store into a react component
render(
		<Provider store={store}>
			<App />
		</Provider>,
		window.document.getElementById("app"));