import React, { Component } from 'react'

export class Footer extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id="footer">
				FOOTER
				{this.props.children}
			</div>
		)
	}
}

export default Footer
