import React from "react";

export class Main extends React.Component {
	render() {
		var inUser = "anna";
		return(
			<div>
				<button onClick={() => this.props.changeUsername(inUser)}
						className="btn btn-primary">Change username
				</button>
			</div>
		); 
	}
}

Main.proptypes = {
	changeUsername: React.PropTypes.func
};