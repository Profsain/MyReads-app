import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const BookShelves = (props) => {
    const { books, onChangeShelf } = props;
    const shelfCategory = [
        { type: 'currentlyReading', title: 'Current Reading' },
        { type: 'wantToRead', title: 'Want to Read' },
        { type: 'read', title: 'Read' },
    ];

    return (
        <div className='list-books-content'>
            {shelfCategory.map((shelf, index) => {
                const shelfBooks = books.filter(book => book.shelf === shelf.type);
                return (
                    <div className='bookshelf' key={index}>
                        <h2 className='bookshelf.title'>{shelf.title}</h2>
                        <div className='bookshelf-books'>
                            <BookShelf books={shelfBooks} onChangeShelf={onChangeShelf} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
//PropTypes for typechecking the value pass down to the component
BookShelves.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
}
export default BookShelves;