import React, { Component } from 'react';
import './index.css';

class Book extends Component {
  
  render() {
    const { book } = this.props;
    return (
      <button className="c-book">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover`}/>
        <h2 className="c-book__title">{book.volumeInfo.title}</h2>
      </button>
    );
  }
}

export default Book;
