import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';



Meteor.startup(() => {

	render(<App name='Ken' />, document.getElementById('render-target'));

});


class App extends Component {
	render() {
		return(
			<h1>May React be with you {this.props.name}.</h1>
		)
	}
}
