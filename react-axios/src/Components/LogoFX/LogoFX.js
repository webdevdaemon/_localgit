import React from 'react';

import logo_A from './logo_A.svg';
// import logo_B from './logo_B.svg';

import './LogoFX.css';

const LogoFX = () => (
  <div>
    <div className="LogoFX">
      <img src={logo_A} className="App-logo logo-A" alt="logo" />
      {/*<img src={logo_B} className="App-logo logo-B" alt="logo" />*/}
    </div>
  </div>
)

LogoFX.propTypes = {

}

export default LogoFX;
