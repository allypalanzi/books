import React, { Component } from 'react';
import Book from '../Book';
import Loader from '../Loader';
import './index.css';


/*
* A Books component renders a grid of Book components after pulling in book data from the google api
*/

class Books extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  
  async getBooks () {
    const sessionStorageData = sessionStorage.getItem("books");
    if (sessionStorageData) {
      this.setState({ books: JSON.parse(sessionStorageData), loading: false });
      return;
    }
    try {
      let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject%3Ascience&maxResults=20');
      let data = await response.json();
      this.setState({ books: data.items, loading: false });
      sessionStorage.setItem("books", JSON.stringify(data.items));
    } catch(err) {
      console.error('oh no, an error!', err)
      this.setState({ loading: false });
    }
  }
  
  componentWillMount() {
    this.getBooks();
  }
  
  render() {
    const { books, loading } = this.state;
    
    if (loading) {
      return <Loader />;
    } else if (books) {
      return (
        <section className="c-books">
          {books.map((book, index) => {
            return (
              <Book key={index} book={book} />
            )
          })}
        </section>
      );
    } else {
      return (
        <p>Oh no! An error has occured. Please try again later.</p>
      )
    }
  }
}

export default Books;
