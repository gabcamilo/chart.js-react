import React, { Component } from 'react'

export class Content extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id="content" style={{padding: 5 + 'em'}}>
			CONTENT
				{this.props.children}
			CONTENT
			</div>
		)
	}
}

export default Content
