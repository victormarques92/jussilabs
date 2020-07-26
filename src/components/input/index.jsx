import React, { Component } from 'react'
import './styles.scss'

export default class Input extends Component {
	render() {
		return (
			<div className="box-input">
				<input
					id={this.props.id}
					className="input"
					type={this.props.type}
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChange={this.props.onChange}
				/>

				<button className="btn" onClick={this.props.onClickButton}>
					{this.props.textButton}
				</button>
			</div>
		)
	}
}
