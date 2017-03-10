//create a reducer to simulate a user

const userReducer = (state = {	/*state = {} initialises state for the first time es6*/
		name: "Max",
		age: 27
	}, action) => 
{
	switch(action.type) {
		case "SET_NAME_FULFILLED": 
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

export default userReducer;