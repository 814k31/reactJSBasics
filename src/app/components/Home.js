import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state ={
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		};

		setTimeout(() => {
			this.setState({status: this.state.status + 1});
		},4000);
	}

	onMakeOlder() {
		this.setState({age: this.state.age + 3});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		});
	}

	render() {
		return (
			<div>
				<p>Your name is {this.props.name}!</p>
				<p>You are {this.state.age} years old</p>
				<p>DOM Status!! {this.state.status}</p>
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
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary">
					Greet
				</button>
				<hr/>
				<input type="text" value={this.state.homeLink}
					onChange={(event) => this.onHandleChange(event)}/>
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string
};
