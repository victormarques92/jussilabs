import React, { Component } from 'react'
import './styles.scss'

import Brastemp from '../../assets/images/logo-brastemp.svg'
import CompraCerta from '../../assets/images/logo-compra-certa.svg'
import Consul from '../../assets/images/logo-consul.svg'
import TheBar from '../../assets/images/logo-thebar.svg'

const stores = [
	{ id: 0, name: 'Brastemp', img: Brastemp },
	{ id: 1, name: 'Compra Certa', img: CompraCerta },
	{ id: 2, name: 'Consul', img: Consul },
	{ id: 3, name: 'The Bar', img: TheBar }
]

export default class topStores extends Component {
	render() {
		return (
			<div className="top-stores">
				<div className="container">

					<ul className="list-data">
						<li className="item">Nossas principais lojas VTEX</li>
						<li className="item">→</li>

						{
							stores.map(store => (
								<li className="item" key={store.id}>
									<img src={store.img} alt={store.name} />
								</li>
							))
						}
					</ul>

				</div>
			</div>
		)
	}
}
