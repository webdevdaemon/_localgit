import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/index';
import HomePage from './Pages/HomePage/index';
import Footer from './Components/Footer/index';

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className="head">
          <Header />
        </section>

        <section className="page">
          <HomePage />
        </section>

        <section className="foot">
          <Footer />
        </section>

      </main>
    )
  }
}

export default App;
