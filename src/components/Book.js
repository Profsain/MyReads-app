import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

const Book = (props) => {
    const { book, books, onChangeShelf } = props;

    //Handle missing cover images and title
    const coverImg =
        book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : 'noBookCover';
    const title = book.title ? book.title : 'No title available';

    return (
        <li>
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${coverImg})`
                        }}
                    />
                    <ShelfChanger book={book} books={books} onChangeShelf={onChangeShelf} />
                    <div className='book-title'>{title}</div>
                    {/* Check for book authors if it exist, render each book on separate line */
                        book.authors &&
                        book.authors.map((author, index) => (
                            <div className='book-authors' key={index}>
                                {author}
                            </div>
                        ))}
                </div>
            </div>
        </li>
    );
};

//PropTypes typechecking the component value
Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};
export default Book;