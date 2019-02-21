import './AppWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'

const AppWrapper = (props) => (
	<div className="AppWrapper">
		{ props.children }
	</div>
)
AppWrapper.propTypes = {
	children: PropTypes.element,
}
AppWrapper.defaultProps = {}

export default AppWrapper
