import React from 'react';
import './LogoTitle.css';
import BoldTitle from '../BoldTitle/index';

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
  title: React.PropTypes.string,
  message: React.PropTypes.string
}

LogoTitle.defaultProps = {
  title: "Title Goes Here...",
  message: "Here is the LogoTitle Message!"
}

export default LogoTitle;
