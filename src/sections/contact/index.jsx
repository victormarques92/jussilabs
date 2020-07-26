import React, { Component } from 'react'
import './styles.scss'

export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="container">
					<h3 className="title">
						Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.
					</h3>
					<p className="text">
						Entre em contato
					</p>

					<a className="email" href="mailto:comercial@jussi.com.br">comercial@jussi.com.br</a>
				</div>
			</div>
		)
	}
}
