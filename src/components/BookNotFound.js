import React from 'react'
import { Link } from 'react-router-dom'
import noBook from '../images/noBook.jpg'

const BookNotFound = () => (
    <div>
    <h1 className='not-found-title'>
        No Books Avaible......
        </h1>
        <figure className='not-found-img'>
            <img src={noBook} alt='Book Not Found' />
            <figcaption>
                Photo by vhv.rs - Blank Book Cover
            </figcaption>
        </figure>
        <div className='home-link'>
            <Link to='/'>Return Home and try again.</Link>
        </div>
    </div>
)
export default BookNotFound;