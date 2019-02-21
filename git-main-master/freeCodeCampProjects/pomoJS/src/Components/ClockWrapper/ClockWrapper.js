import './ClockWrapper.css'

import DigitalClockDisplay from '../DigitalClockDisplay/index'
import PropTypes from 'prop-types'
import React from 'react'

class ClockWrapper extends React.Component {
	constructor() {
		super()
		this.state = {
			timer      : { hours, minutes, seconds },
			task_list  : [],
			is_running : false,
		}
	}

	render() {
		return (
			<div className="ClockWrapper">
				<DigitalClockDisplay
					timerObject={this.state.timer}
					is_running={this.state.is_running}
				/>
			</div>
		)
	}
}
ClockWrapper.propTypes = {
	timer: PropTypes.object,
	task_list: PropTypes.array,
	is_running: PropTypes.bool,
}
ClockWrapper.defaultProps = {
	timer: {hours: 0, minutes: 0, seconds: 0},
	task_list: []
}

export default ClockWrapper
