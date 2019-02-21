import './TitleBlock.css'

import React from 'react'
import PropTypes from 'prop-types'

const TitleBlock = (props) => (
	<div className="TitleBlock">
		<h2> {props.mainTitle} </h2>
		<h4> {props.subTitle}  </h4>
	</div>
)

TitleBlock.propTypes = {
	mainTitle : PropTypes.string,
	subTitle  : PropTypes.string,
	bgImgUrl  : PropTypes.string
}

TitleBlock.defaultProps = {
	mainTitle : 'Interesting Title',
	subTitle  : 'A Catchy SubTitle...'
}

export default TitleBlock
