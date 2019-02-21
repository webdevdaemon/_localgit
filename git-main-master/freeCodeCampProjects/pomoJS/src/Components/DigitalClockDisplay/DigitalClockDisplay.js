import './DigitalClockDisplay.css'

import DigitalClockColumn from '../DigitalClockColumn/index'
import PropTypes from 'prop-types'
import React from 'react'

const DigitalClockDisplay = (props) => (
	<div className="DigitalClockDisplay">
		<DigitalClockColumn section='hours' timeValue={props.timer.hours} />
		<div className="seperator-wrapper"><span className="seperator">|</span></div>
		<DigitalClockColumn section='minutes' timeValue={props.timer.minutes} />
		<div className="seperator-wrapper"><span className="seperator">|</span></div>
		<DigitalClockColumn section='seconds' timeValue={props.timer.seconds} />
	</div>
)
DigitalClockDisplay.propTypes = {
	timer: PropTypes.object,
	is_running: PropTypes.bool,
}
DigitalClockDisplay.defaultProps = {
	timer: {hours: '00', minutes: '00', seconds: '00'},
	is_running: false,
}

export default DigitalClockDisplay
