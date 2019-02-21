import React from 'react'
import PropTypes from 'prop-types'
import './BoldTitle.css'

function BoldTitle(props) {
	return (
		<div className="BoldTitle">
			<h2 className="outer-title">
				webDevDaemon<span className="title-paren paren-open">(</span>
					<span className="inner-title">{props.title}</span>
				<span className="title-paren paren-close">)</span>
			</h2>
			<p className="sub-title">
				<em>{props.message}</em>
			</p>
		</div>
	)
}

BoldTitle.propTypes = {
	title	:	PropTypes.string,
	message	:	PropTypes.string,
}

BoldTitle.defaultProps = {
	title	: 	"Portfolio"
}

export default BoldTitle
