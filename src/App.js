import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Button } from 'semantic-ui-react'

class App extends Component {

	constructor (props) {
		super(props)
		this.onMouseOverHandler = this.onMouseOverHandler.bind(this)
		this.onMouseOutHandler = this.onMouseOutHandler.bind(this)
		this.state = {
			github: false,
			email: false,
			linkedin: false,
		}
	}

	onMouseOverHandler (e) {
		this.setState({ [e.target.getAttribute('value')]: true })
	}

	onMouseOutHandler (e) {
		this.setState({ [e.target.getAttribute('value')]: false })
	}

	render () {
		return (
			<div className='app'>
				<Header as="h1" textAlign="center" className="brandname" icon inverted>
					<span className="name">
						Joshua Sun
					</span>

					<div className='section-divide'></div>
					<Header.Subheader>
						<span className='description'>
							Bachelor of Software Engineering<br />
							University of Waterloo<br />
							Class of 2021<br />
							<div className='section-divide'></div>
							<div className='icons'>
								<Icon name='github' value='github' link loading={this.state.github}
									onMouseOver={this.onMouseOverHandler}
									onMouseOut={this.onMouseOutHandler}
									onClick={() => window.open('https://github.com/jsun98', '_blank')}
								/>
								<Icon name='mail' value='email' link loading={this.state.email}
									onClick={() => window.location.href = 'mailto:joshuasun1998@icloud.com'}
									onMouseOut={this.onMouseOutHandler}
									onMouseOver={this.onMouseOverHandler}
								/>
								<Icon name='linkedin square' value='linkedin' link loading={this.state.linkedin}
									onClick={() => window.open('https://www.linkedin.com/in/josh-sun', '_blank')}
									onMouseOut={this.onMouseOutHandler}
									onMouseOver={this.onMouseOverHandler}
								/>
							</div>
							<div className='section-divide'></div>
							<Button inverted color='blue' onClick={() => {
								window.open('https://drive.google.com/file/d/0B5b-3ZFIBgHBYkFlQUtiTmtzd2M/view?usp=sharing', '_blank')
							}}><span className='button-text'>Resume</span></Button>
						</span>
					</Header.Subheader>
				</Header>
			</div>
		)
	}
}

export default App
