import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state ={
			age: props.initialAge
		}
	}

	onMakeOlder() {
		this.setState({age: this.state.age + 3});
	}

	render() {
		return (
			<div>
				<p>Your name is {this.props.name}!</p>
				<p>You are {this.state.age} years old</p>	
				<p> User Object name = Name: {this.props.user.name}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr/>
					{this.props.children}
				<hr/>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
};
