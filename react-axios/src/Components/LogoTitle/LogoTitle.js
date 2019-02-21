import React from 'react'
import PropTypes from 'prop-types'
import BoldTitle from '../BoldTitle/index'
import './LogoTitle.css'

class LogoTitle extends React.Component {
  render() {
    return (
      <div>
        <div className="LogoTitle">
            <BoldTitle title={this.props.title} message={this.props.message} />
        </div>
      </div>
    )
  }
}

LogoTitle.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
}

LogoTitle.defaultProps = {
  title: "Title Goes Here...",
  message: "Here is the LogoTitle Message!"
}

export default LogoTitle
