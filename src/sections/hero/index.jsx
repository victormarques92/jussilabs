import React, { Component } from 'react'
import './styles.scss'

import Button from '../../components/button'
import ImgBatedeira from '../../assets/images/product-batedeira.png'
import ImgGeladeira from '../../assets/images/product-geladeira.png'
import ImgWhisk from '../../assets/images/product-whisk.png'


const products = [
	{
		id: 0,
		name: 'Batedeira',
		img: ImgBatedeira,
		action: 'Comprar em 12x',
		link: '#'
	},
	{
		id: 1,
		name: 'Geladeira',
		img: ImgGeladeira,
		action: 'Mais Detalhes',
		link: '#'
	},
	{
		id: 2,
		name: 'Whisk',
		img: ImgWhisk,
		action: 'Adicionar à sacola',
		link: '#'
	}
]

export default class Hero extends Component {
	render() {
		return (
			<div className="hero">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<h1 className="title">
								Criamos lojas que vendem mais.
							</h1>

							<p className="text">
								A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
							</p>

							<Button>Veja nossas soluções</Button>
						</div>

						<div className="col-6">
							<div className="hero-products">
								{
									products.map(product => (
										<div className="product" key={product.id}>
											<img
												className="image"
												src={product.img}
												alt={product.name}
											/>

											<button className="btn">
												{product.action}
											</button>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
