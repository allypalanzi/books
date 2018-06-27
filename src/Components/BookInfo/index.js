import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class BookInfo extends Component {
  
  render() {
    const { book } = this.props.location.state;
    return (
      <section className="c-book-info">
        <Link to="/">⬅️ Back</Link>
        <div className="c-book-info__container">
          <div className="c-book-info__image">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover`}/>
          </div>
          <div className="c-book-info__info">
            <h2 className="c-book-info__title">{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors.join(', ')}</p>
            <p>{book.volumeInfo.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default BookInfo;
