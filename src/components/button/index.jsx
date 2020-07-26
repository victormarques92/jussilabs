import React, { Component } from 'react'
import './styles.scss'

export default class Button extends Component {
	render() {
		return (
			<button
				className={`button ${this.props.primary && 'primary'} ${this.props.full && 'full'}`}
				onClick={this.props.onClick}
				primary
			>
				{this.props.children}
			</button>
		)
	}
}
