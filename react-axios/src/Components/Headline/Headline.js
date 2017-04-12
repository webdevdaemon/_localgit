import React from 'react';
// import cssModule from 'react-css-modules';
import './Headline.css';

const Headline = (props) => (
  <div>
    <div className="Headline-wrapper">
      <h2 className="Headline-text Headline-title">{props.headlineTitle}</h2>
      <h4 className="Headline-text Headline-subtitle">{props.headlineSubTitle}</h4>
    </div>
  </div>
);

Headline.propTypes = {
  headlineTitle: React.PropTypes.string,
  headlineSubTitle: React.PropTypes.string
}

Headline.defaultProps = {
  headlineTitle: "This is a Page Title",
  headlineSubTitle: "This is a VERY clever little sub-title or teaser"
}

export default Headline;
