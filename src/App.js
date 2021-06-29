import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import BookShelves from './components/BookShelves'
import BookSearch from './components/BookSearch'
import { Link } from 'react-router-dom';
import BookNotFound from './components/BookNotFound'

class BooksApp extends React.Component {
  state = { books: [] };

  // componentDidMount() method Load the books before passing it to the dom
  componentDidMount() {
    BooksAPI.getAll().then(response => this.setState({ books: response }));
  }

  onChangeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then((response) => {
      // update shelf with new book from search or book change
      changedBook.shelf = shelf;
      // update state with the changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from the array
          .filter(book => book.id !== changedBook.id)
          // Add book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className='app'>
        <Switch>
          <Route
            path="/search"
            render={() => (
              <BookSearch books={books} onChangeShelf={this.onChangeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookShelves books={books} onChangeShelf={this.onChangeShelf} />
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />
          <Route component={BookNotFound} />
        </Switch>
      </div>
    );
  }
}
export default BooksApp;
