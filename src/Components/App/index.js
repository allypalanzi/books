import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from '../Books';
import BookInfo from '../BookInfo';
import Header from '../Header';
import './index.css';

class App extends Component {
  componentWillMount() {
    // clear session storage on first load to make sure
    // we have fresh data if a user reloads the app
    sessionStorage.clear();
  }
  render() {
    return (
      <Router>
        <section className="l-wrapper">
          <Header />
          <Switch>
            <Route exact path={'/'} component={Books} />
            <Route path={'/:id'} component={BookInfo} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
