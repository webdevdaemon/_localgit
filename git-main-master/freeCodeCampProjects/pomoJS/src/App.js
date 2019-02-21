import './App.css'

import React, { Component } from 'react'

import AppWrapper from './Components/AppWrapper/AppWrapper'
import ClockWrapper from './Components/ClockWrapper/index'
import logo from './logo.svg'

class App extends Component {
	constructor() {
		super()
		this.state = {
			is_running: false,
			task_list: [],
		}
	}

	_timerToggler = (is_running = this.state.is_running) => {
		this.setState({
			is_running: !is_running,
		}, () => {
			console.log('Timer Toggled')
		})
	}

	_createNewTask = (e) => {
		this.setState({

		})
	}

	_deleteSelectedTask = (e) => {

	}

	render() {
		return (
			<div className="App">
				<AppWrapper>
					<ClockWrapper />
				</AppWrapper>
			</div>
		)
	}
}

export default App
