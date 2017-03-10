import React from "react";
import {render} from "react-dom";

import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./container/App";

import store from "./store";

//use a provider to pass the store into a react component
render(
		<Provider store={store}>
			<App />
		</Provider>,
		window.document.getElementById("app"));