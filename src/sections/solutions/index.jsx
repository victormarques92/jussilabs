import React, { Component } from 'react'
import './styles.scss'
import Card from '../../components/card'

const products = [
	{
		id: 0,
		appearance: 'P1',
		name: 'Nome do Produto #1',
		description: 'Descrição do Produto #1',
		feature: [
			{ id: 0, name: 'Feature 1' },
			{ id: 1, name: 'Feature 2' },
			{ id: 2, name: 'Feature 3' }
		]
	},
	{
		id: 1,
		appearance: 'P2',
		name: 'Nome do Produto #2',
		description: 'Descrição do Produto #2',
		feature: [
			{ id: 0, name: 'Feature 1' },
			{ id: 1, name: 'Feature 2' },
			{ id: 2, name: 'Feature 3' }
		]
	},
	{
		id: 2,
		appearance: 'P3',
		name: 'Nome do Produto #3',
		description: 'Descrição do Produto #3',
		feature: [
			{ id: 0, name: 'Feature 1' },
			{ id: 1, name: 'Feature 2' },
			{ id: 2, name: 'Feature 3' }
		]
	},
	{
		id: 3,
		appearance: 'P4',
		name: 'Nome do Produto #4',
		description: 'Descrição do Produto #4',
		feature: [
			{ id: 0, name: 'Feature 1' },
			{ id: 1, name: 'Feature 2' },
			{ id: 2, name: 'Feature 3' }
		]
	},
]

export default class Solutions extends Component {
	render() {
		return (
			<div className="solutions" id="nossas-solucoes">
				<div className="container">
					<h2 className="title">
						<span className="symbol">{`//`}</span>
						Nossas soluções
					</h2>

					<div className="row">
						{
							products.map(product => (
								<div className="col-3" key={product.id}>
									<Card
										appearance={product.appearance}
										name={product.name}
										description={product.description}
										data={product.feature}
										/>
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}
