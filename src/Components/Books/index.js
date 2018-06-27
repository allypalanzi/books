import React, { Component } from 'react';
import Book from '../Book';
import Loader from '../Loader';
import './index.css';

class Books extends Component {
  render() {
    const { books, loading } = this.props;
    
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
