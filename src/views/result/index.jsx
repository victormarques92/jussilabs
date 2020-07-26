import React, { Component } from 'react'
import './styles.scss'

import * as Dogs from '../../domain/services/dogs'
import Button from '../../components/button'
import Loading from '../../components/loading'
import Footer from '../../sections/footer'
import Navigation from '../../sections/navigation'
import Newsletter from '../../sections/newsletter'

export default class Result extends Component {

	state = {
		showLoading: false,
		breed: '',
		dogs: [],
		errorMessage: ''
	}

	componentDidMount() {
		this.setBreed()
		this.loadDogs()
	}

	render() {
		return (
			<div>
				<Navigation />

				<div className="container">

					<div className="result">
						<h2 className="title">Resultado da busca por: {this.state.breed}</h2>


						{
							this.state.showLoading
							? <Loading />
							: this.state.errorMessage
								? <p className="error">{this.state.errorMessage}</p>
								: this.renderDogs()
						}
					</div>

				</div>

				<Newsletter />
				<Footer />
			</div>
		)
	}

	// ==========================================
	// 									Functions
	// ==========================================
	renderDogs() {
		return (
			<div className="row">
				{
					this.state.dogs.map((dog, index) => (
						<div className="col-3" key={index}>
							<div className="product">
								<div className="image">
									<img src={dog} alt={this.state.breed} />
								</div>

								<h4 className="name">
									{this.state.breed} #{index + 1}
								</h4>

								<Button primary full>Ver mais</Button>
							</div>
						</div>
					))
				}
			</div>
		)
	}

	showLoading(showLoading) {
		this.setState({ showLoading })
	}

	setBreed() {
		let breed = window.location.search.substr(1)

		this.setState({ breed: breed.replace('%20', ' ') })
	}

	loadDogs() {
		let breed = window.location.search.substr(1).split('%20')
		let searchBy = ''

		breed.length > 1
			? searchBy = `${breed[1]}/${breed[0]}`
			: searchBy = `${breed[0]}`

		this.showLoading(true)

		Dogs.loadDogs(searchBy)
			.then(data => {
				this.onLoadDogs(data)
				this.showLoading(false)
			})
			.catch(err => {
				this.failureLoadDogs()
				this.showLoading(false)
			})
	}

	onLoadDogs(dogs) {
		this.setState({ dogs: dogs.message })
	}

	failureLoadDogs() {
		this.setState({
			errorMessage: 'Nennum resultado encontrado.'
		})
	}
}
