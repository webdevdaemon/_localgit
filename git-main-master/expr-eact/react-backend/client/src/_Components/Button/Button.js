import './Button.css'

import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
	<a onClick={props.handler} className="Button">
		<span>
			{ (props.label) ? props.label : props.children }
		</span>
	</a>
)
Button.propTypes = {
	handler : PropTypes.func,
	label: PropTypes.string
}
Button.defaultProps = {}


export default Button
