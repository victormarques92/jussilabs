import React, { Component } from 'react'
import swal from 'sweetalert'
import './styles.scss'

import Input from '../../components/input'

export default class Newsletter extends Component {
	state = {
		email: ''
	}

	render() {
		return (
			<div className="newsletter">
				<div className="container">
					<h3 className="title">
						Receba novidades da nossa área de produtos digitais.
					</h3>

					<div className="email-news">
						<Input
							id="newsletter"
							type="email"
							placeholder="Digite seu e-mail"
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
							textButton="CADASTRAR"
							onClickButton={() => this.registerNewsLetter()}
						/>
					</div>
				</div>
			</div>
		)
	}

	// ==========================================
	// 									Functions
	// ==========================================
	registerNewsLetter() {
		// eslint-disable-next-line no-useless-escape
		let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		regex.test(this.state.email)
			? swal({
				title: 'E-mail cadastrado com sucesso!',
				icon: 'success'
			}).then(() => { this.setState({ email: '' }) })
			: swal({
				title: 'Por favor, insira um e-mail',
				icon: 'error'
			})
	}
}
