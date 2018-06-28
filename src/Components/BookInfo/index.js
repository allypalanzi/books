import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { getBook } from '../../services';
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
  
  async getSingleBook(id) {
    try {
      let data = await getBook(id);
      this.setState({ book: data, loading: false });
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
      this.getSingleBook(this.props.match.params.id);
    }    
  }
  
  render() {
    const loading = this.state.loading;
    // all the information we need is stored in volumeInfo
    const book = this.state.book ? this.state.book.volumeInfo : undefined;
    if (loading) {
      return <Loader />;
    } else if (book) {
      return (
        <section className="c-book-info">
          <Link className="c-book-info__link" to="/"><svg className="p-svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg> <span className="p-link">Back</span></Link>
          <div className="c-book-info__container">
            {book.imageLinks && book.imageLinks.thumbnail &&
              <div className="c-book-info__image">
                <img src={book.imageLinks.thumbnail} alt={`${book.title} cover`}/>
              </div>
            }
            <div className="c-book-info__info">
              <h2 className="c-book-info__title">{book.title}</h2>
              <p>{book.authors.join(', ')}</p>
              <p>{book.description}</p>
              <a className="p-button" href={book.previewLink}>Preview</a>
            </div>
          </div>
        </section>
      );
    } else {
      return <p className="test-error">This book could not be found.</p>
    }
  }
}

export default BookInfo;
