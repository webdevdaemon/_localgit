import React from 'react';
// import cssModule from 'react-css-modules';
import './Headline.css';

const Headline = () => (
  <div>
    <div className="Headline">
      <p>This is your Headline Section...</p>
    </div>
  </div>
);

Headline.propTypes = {
  headlineTitle: React.PropTypes.string,
  headlineSubTitle: React.PropTypes.string
};

export default Headline;
