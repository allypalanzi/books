import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import './index.css';

/*
* A BookInfo component renders information about a book in two ways: either by taking the ID from the url and calling
* the google api, or by being passed props from the component that links to the BookInfo component.
*/

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  
  async getBook(id) {
    try {
      let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=id%3A${id}`);
      let data = await response.json();
      this.setState({ book: data.items[0], loading: false });
    } catch(err) {
      console.error('oh no, an error!', err)
      this.setState({ loading: false });
    }
  }
  
  componentWillMount() {
    if (this.props.location.state) {
      this.setState({ book: this.props.location.state.book, loading: false });
      return;
    } else {
      this.getBook(this.props.match.params.id);
    }    
  }
  
  render() {
    const loading = this.state.loading;
    const book = this.state.book;
    if (loading) {
      return <Loader />;
    } else if (book) {
      return (
        <section className="c-book-info">
          <Link to="/"><span role="img" aria-label="back icon">⬅️</span> Back</Link>
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
    } else {
      return <p>This book could not be found.</p>
    }
  }
}

export default BookInfo;
