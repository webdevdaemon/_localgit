import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './MOCK_DATA.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Extender />
      </div>
    );
  }
}

class Extender extends Component {

  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch( './MOCK_DATA.json' ).then( response => this.setState( this.state.items = response.mock ) )
  }
  render(){
    let items = this.state.items
    items.map( item => {
      item = item.first_name.toLowerCase()
      console.log(item)
    })
    return (
    <div>
      {items.map( (item) => {
        <Person key={item} />
      })
    }
    </div>
    )
  }
}

const Person = (props) => <h4>{this.props.key}</h4>



export default App;
