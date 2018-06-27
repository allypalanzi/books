import React, { Component } from 'react';
import Books from '../Books';
import Header from '../Header';
import './index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="l-wrapper">
          <Books />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
