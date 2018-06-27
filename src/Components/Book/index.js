import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { createUrl } from '../../utilities/strings';
import './index.css';

class Book extends Component {
  
  render() {
    const { book } = this.props;
    return (
      <Link to={{
        pathname: `/${createUrl(book.volumeInfo.title)}`,
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
