import React from 'react';
import './Header.css';

import LogoFX from '../LogoFX/index';
import LogoTitle from '../LogoTitle/index';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <LogoFX />
        <LogoTitle title="portfolio" message="Charles E. Morgan's Web Development Portfolio" />
      </div>
    )
  }
}

export default Header;
