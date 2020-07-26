import React, { Component } from 'react'

import Navigation from '../../sections/navigation'
import Hero from '../../sections/hero'
import TopStores from '../../sections/topStores'
import Solutions from '../../sections/solutions'
import TheJussi from '../../sections/theJussi'
import Contact from '../../sections/contact'
import Newsletter from '../../sections/newsletter'
import Footer from '../../sections/footer'

export default class Home extends Component {
	render() {
		return <>
			<Navigation />
			<Hero />
			<TopStores />
			<Solutions />
			<TheJussi />
			<Contact />
			<Newsletter />
			<Footer />
		</>
	}
}
