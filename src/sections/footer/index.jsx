import React, { Component } from 'react'
import './styles.scss'

import WppCompany from '../../assets/images/wppcompany.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import LinkedIn from '../../assets/images/linkedin.png'

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
					<img className="wpp" src={WppCompany} alt="WPP Company"/>

					<ul className="social-media">
						<li className="item">
							<a href="https://www.facebook.com" target="blank">
								<img src={Facebook} alt="Facebook"/>
							</a>
						</li>
						<li className="item">
							<a href="https://www.instagram.com" target="blank">
								<img src={Instagram} alt="Instagram"/>
							</a>
						</li>
						<li className="item">
							<a href="https://www.linkedin.com" target="blank">
								<img src={LinkedIn} alt="LinkedIn"/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
