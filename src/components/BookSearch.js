import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookSearch extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    };
    
    // Store books data in a state object
    state = {
        query: '',
        newBooks: [],
        searchError: false,
    };

    // Get Books 
    getBooks = (event) => {
        const query = event.target.value;
        this.setState({ query });

        // Search for books if user input
        if (query) {
            BooksAPI.search(query.trim(), 20).then(books => {
                books.length > 0
                    ? this.setState({ newBooks: books, searchError: false })
                    : this.setState({ newBooks: [], searchError: true });
            });

            // Set state to default, if query is empty
        } else this.setState({ newBooks: [], searchError: false });
    };

    render() {
        const { query, newBooks, searchError } = this.state;
        const { books, onChangeShelf } = this.props;

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to="/">
                        Close
                    </Link>
                    <div className='search-books-input-wrapper'>
                        <input
                            type='text'
                            placeholder='Search by Title or Author'
                            value={query}
                            onChange={this.getBooks}
                        />
                    </div>
                </div>
                <div className='search-books-results'>
                    {newBooks.length > 0 && (
                        <div>
                            <h3>Search returned: {newBooks.length} books</h3>
                            <ol className='books-grid'>
                                {newBooks.map((book) => (
                                    <Book
                                        book={book}
                                        books={books}
                                        key={book.id}
                                        onChangeShelf={onChangeShelf}
                                    />
                                ))}
                            </ol>
                        </div>
                    )}
                    {searchError && (
                        <h3>Sorry! No search results available. Please try again.</h3>
                    )}
                </div>
            </div>
        );
    }
}
export default BookSearch;