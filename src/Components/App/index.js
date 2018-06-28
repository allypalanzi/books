import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from '../Books';
import BookInfo from '../BookInfo';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="l-wrapper">
          <Header />
          <Switch>
            <Route exact path={'/'} component={Books} />
            <Route path={'/:id'} component={BookInfo} />
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
