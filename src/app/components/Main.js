import React from "react";

export const Main = (props) => {
	var inUser = "anna";

	return(
		<div>
			<div className="row">
				<div className="col-xs-12">
					<h1>The Main Page</h1>
				</div>
			</div>	

			<div className="row">
				<div className="col-xs-12">
					<button onClick={() => props.changeUsername(inUser)}
					className="btn btn-primary">
						Change username
					</button>
				</div>
			</div>
		</div>
	); 
};

Main.proptypes = {
	changeUsername: React.PropTypes.func
};