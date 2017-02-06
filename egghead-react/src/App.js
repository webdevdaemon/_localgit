import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Clock />
        <Footer />
      </div>
    );
  }
}

class Clock extends React.Component {

  renderDigit() {
    return (
      <Digit />
    );
  }


  constructor(props) {
    super(props);
    this.state = { runClock : false, };
  }

  render() {
    return (
      <div>
        <div className='app'>
          <div className='clock-wrap main-clock'>
            <div className='clock'>
              <h2 className='clock-work-ttl'>WORK</h2>
              <Display />
            </div>
          </div>
          <div className='clock-controls'>
            <form>
              <Input className='timer timer-hour hour' name='hour' placeholder='--' min='00' max='24' />
              <Input className='timer timer-min min'   name='min'  placeholder='--' min='00' max='59' />
              <Input className='timer timer-sec sec'   name='sec'  placeholder='--' min='00' max='59' />
            </form>
            <Button message='GO!!!' className='go-wrap' buttonClassName='go' />
          </div>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h1 className='title'>PoMotiV8</h1>
          <h4 className='sub-title'>a javascript pomodoro clock app</h4>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className='footer'>
          Insert Footer Here
        </div>
      </div>
    );
  }
}

class Input extends React.Component {
  let propTypes = {
    name: undefined
  }
  render() {
    let time_type = this.props.name;
    let max  = '59';
    if (time_type !== 'secs' && time_type !== 'mins') {
      max  = '24';
    }
    return (
      <div>
        <input className={'timer timer-' + time_type + ' ' + time_type} type='number' name={time_type} placeholder='--' min='00' max={max} data-name={time_type} />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <button className={this.props.buttonClassName}>
            <h2>{this.props.message}</h2>
          </button>
        </div>
      </div>
    );
  }
};

class Display extends React.Component {
  render() {
    return (
      <div>
        <div className='flex-display'>
          <div className='block hr'>
            <Digit name='hour' label='hr'/>
            {/*<p className='digit hour' data-name='hour'>00</p>*/}
            {/*<p className='label hr'>hours</p>*/}
          </div>
          <p className='blink animated infinite flash'>|</p>
          <div className='block mn'>
            <Digit name='min' label='mn'/>
            {/*<p className='digit min' data-name='min'>00</p>*/}
            {/*<p className='label mn'>minutes</p>*/}
          </div>
          <p className='blink animated infinite flash'>|</p>
          <div className='block sc'>
            <Digit name='sec' label='sc'/>
            {/*<p className='digit sec' data-name='sec'>00</p>*/}
            {/*<p className='label sc'>seconds</p>*/}
          </div>
        </div>
      </div>
    );
  }
}

class Digit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : '00'};
  }

  render() {
    let time_type = this.props.name;
    return (
      <div>
        <p className={'digit' + time_type}  data-name={time_type}>
          {this.state.value}
        </p>
      </div>
    );
  }
}

export default App;
