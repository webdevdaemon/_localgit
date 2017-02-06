import React from 'react';
// import cssModule from 'react-css-modules';
import './BoldTitle.css';

function BoldTitle(props) {
	return (
		<div className="BoldTitle">
			<h2 className="outer-title">
				webDevDaemon<span className="title-paren paren-open">(</span>
					<span className="inner-title">{props.title}</span>
				<span className="title-paren paren-close">)</span>
			</h2>
			{/*<p className="sub-title">
				<em>{props.message}</em>
			</p>*/}
		</div>
	)
}

BoldTitle.propTypes = {
	title	:	React.PropTypes.string,
	message	:	React.PropTypes.string
}

BoldTitle.defaultProps = {
	title	: 	"Portfolio"
}

export default BoldTitle;
