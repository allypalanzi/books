import React, { Component } from 'react';
import Book from '../Book';
import Loader from '../Loader';
import { getBooks } from '../../services';
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
  
  async getAllBooks () {
    const sessionStorageData = sessionStorage.getItem("books");
    if (sessionStorageData) {
      this.setState({ books: JSON.parse(sessionStorageData), loading: false });
      return;
    }
    try {
      const data = await getBooks();
      this.setState({ books: data, loading: false });
      sessionStorage.setItem("books", JSON.stringify(data));
    } catch(err) {
      console.error('oh no, an error!', err)
      this.setState({ loading: false });
    }
  }
  
  componentWillMount() {
    this.getAllBooks();
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
