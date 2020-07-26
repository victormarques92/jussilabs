import React, { Component } from 'react'
import './styles.scss'

import ImgSearch from '../../assets/images/search.svg'

export default class Search extends Component {
	render() {
		return (
			<div className="search">
				<input
					className="input"
					type="text"
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChange={this.props.onChange}
					onKeyPress={e => e.key === 'Enter' && this.props.onClick()}
				/>

				<button
					className="btn"
					onClick={this.props.onClick}
				>
					<img src={ImgSearch} alt="Icon Search" />
				</button>
			</div>
		)
	}
}
