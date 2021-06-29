import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    };

    render() {
        const { books, onChangeShelf } = this.props;

        return (
            <ol className='books-grid'>
                {books.map((book) => (
                    <Book
                        book={book}
                        books={books}
                        key={book.id}
                        onChangeShelf={onChangeShelf}
                    />
                ))}
            </ol>
        );
    }
};
export default BookShelf;