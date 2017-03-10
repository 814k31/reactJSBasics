import logger from "redux-logger";
import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";

//create the redux store using combinedReducers to add multiple reducers
//Use applyMiddleware to add console logging when actions are triggered.
export default createStore(
	combineReducers({mathReducer, userReducer}),
	{},
	applyMiddleware(logger(), thunk, promise())
);

//triggered everytime the store gets updated
//no longer used but going to leave it commented to recap later.
//store.subscribe(() => {
	//console.log("Store updated!", store.getState());
//});
