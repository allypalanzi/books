import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

/*
* A Book component renders an image and title card for the provided data
*/

class Book extends Component {
  render() {
    const { book } = this.props;
    return (
      <Link to={{
        pathname: `/${book.id}}`,
        state: {
          book
        }
      }} className="c-book">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover`}/>
        <h2 className="c-book__title">{book.volumeInfo.title}</h2>
      </Link>
    );
  }
}

export default Book;
