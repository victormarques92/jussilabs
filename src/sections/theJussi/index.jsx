import React, { Component } from 'react'
import './styles.scss'

import Button from '../../components/button'
import ImgJussi from '../../assets/images/the-jussi.png'

export default class TheJussi extends Component {
	render() {
		return (
			<div className="the-jussi" id="conheca-a-jussi">
				<div className="container">
					<div className="row">
						<div className="col-3">
							<h3 className="title">
								Olá, somos a Jüssi
							</h3>

							<p className="text">
								A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
							</p>

							<Button>Conheça a Jüssi</Button>
						</div>

						<div className="col box-img">
							<img className="img-jussi" src={ImgJussi} alt="Jussi"/>
						</div>
					</div>
				</div>


			</div>
		)
	}
}
