import React, { Component } from 'react'
import './styles.scss'

import Button from '../button'

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="appearance">
					{this.props.appearance}
				</div>

				<h4 className="name">
					{this.props.name}
				</h4>
				<p className="description">
					{this.props.description}
				</p>

				<ul className="list">
					{
						this.props.data.map(item => (
							<li className="item" key={item.id}>• {item.name}</li>
						))
					}
				</ul>

				<Button primary full>Ver Solução</Button>
			</div>
		)
	}
}
