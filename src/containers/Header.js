import React, { Component } from 'react'

export class Header extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id="header">
				HEADER
				{this.props.children}
			</div>
		)
	}
}

export default Header
