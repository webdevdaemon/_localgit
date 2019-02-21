import React from 'react'
import './HomePage.css'

import Headline from '../../Components/Headline/index.js'

class HomePage extends React.Component {

  render() {
    return (
      <div className="HomePage">
        <Headline headlineTitle="Welcome to the webDevDaemon's domain..." headlineSubTitle="The ONLY place to find the perfect candidate for your currently vacant web developer position!"/>
      </div>
    )
  }
}

export default HomePage
