import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Button } from 'semantic-ui-react'

class App extends Component {

	render () {
		return (
			<div className='app'>
				<Header as="h1" textAlign="center" className="brandname" icon inverted>
					<span className="name">
						Joshua Sun
					</span>
					<Header.Subheader className='description-container'>
						<span className='description'>
							University of Waterloo<br />
							Bachelor of Software Engineering, Class of 2021<br />
							<div className='section-divide'></div>
							<Icon className='icons' name='github' link onClick={() => window.open('https://github.com/jsun98', '_blank')}/>
							<Icon className='icons' name='mail' link onClick={() => window.location.href = 'mailto:joshuasun1998@icloud.com'} />
							<Icon className='icons' name='linkedin square' link onClick={() => window.open('https://www.linkedin.com/in/josh-sun', '_blank')} />
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
