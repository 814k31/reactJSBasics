import React from "react";
import {connect} from "react-redux";

import {Main} from "../components/Main";
import {User} from "../components/User";

import {setName} from "../actions/userActions";

class App extends React.Component {
	changeUsername(newName) {
		this.props.setName(newName);
		//console.log("User name ", this.props.user.name);
	}

	render() {
		var newName = "Anna";
		return (
			<div className="container">
									{/*using bind here to test non es6 way of importing.*/}
				<Main changeUsername={this.changeUsername.bind(this, newName)}/>
				<User username={this.props.user.name}/>
			</div>
		);
	}
}

//creates a map which allocates reducers to props
const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	};
};

//declares which actions are available to the App component
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {dispatch(setName(name));}
	};
};

//connect connects the map to the reactjs component
export default connect(mapStateToProps, mapDispatchToProps)(App);