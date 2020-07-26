import React, { Component } from 'react'
import './styles.scss'
import Logo from '../../assets/images/jussi.svg'
import Cart from '../../assets/images/shopping-cart.svg'
import Search from '../../components/search'

const menu = [
	{
		id: 0,
		name: 'Nossas soluções',
		hash: 'nossas-solucoes'
	},
	{
		id: 1,
		name: 'Conheça a Jüssi',
		hash: 'conheca-a-jussi'
	}
]


export default class Navigation extends Component {
	state = {
		fieldSearch: ''
	}

	render() {
		return (
			<nav className="nav">
				<div className="nav-left">
					<a href="/">
						<img src={Logo} alt="Jussi"/>
					</a>

					<ul className="menu">
						{
							menu.map(item => (
								<li
									key={item.id}
									className="item"
									onClick={() => this.hashLink(item.hash)}
								>
										{item.name}
								</li>
							))
						}
					</ul>
				</div>

				<ul className="nav-right">
					<li className="item">
						<Search
							placeholder="Buscar"
							value={this.state.fieldSearch}
							onChange={(e) => this.setState({ fieldSearch: e.target.value })}
							onClick={() => this.searchDogs(this.state.fieldSearch)}
						/>
					</li>
					<li className="item">Login</li>
					<li className="item">
						<img src={Cart} alt="Cart"/>
					</li>
				</ul>
			</nav>
		)
	}

	// ==========================================
	// 									Functions
	// ==========================================

	hashLink(hash) {
		window.location.pathname === '/'
			? document.querySelector(`#${hash}`).scrollIntoView({
				behavior: 'smooth'
			})
			: window.location.href='/'
	}

	searchDogs(value) {
		window.location.href = `/result?${value}`
	}
}
