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

export default mathReducer;