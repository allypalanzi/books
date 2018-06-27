import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from '../Books';
import BookInfo from '../BookInfo';
import Header from '../Header';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  
  async getBooks () {
    try {
      let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject%3Ascience&maxResults=20');
      let data = await response.json();
      this.setState({ books: data.items, loading: false });
    } catch(err) {
      console.error('oh no, an error!', err)
      this.setState({ loading: false });
    }
  }
  
  componentWillMount() {
    this.getBooks();
  }
  
  render() {
    const books = this.state.books;
    return (
      <Router>
        <React.Fragment>
          <section className="l-wrapper">
            <Header />
            <Switch>
              <Route exact path={'/'} render={ props => <Books books={books} loading={this.state.loading} /> } />
              <Route path={'/:title'} component={BookInfo} />
            </Switch>
          </section>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
