import React from 'react'

const BookComponent = ({book}) => {
    return (
        <React.Fragment>
            <div className='bookData'>
                <h3 className="title">Book Name : {book.bookName}</h3>
                <h5 className="author">Author : {book.authorName}</h5>
                <h5 className="isbn">ISBN : {book.isbn}</h5>
                <h5 className="genre">Genre : {book.genre}</h5>
                <h5 className="availability">{book.availability}</h5>
            </div>
        </React.Fragment>
    )
}

export default BookComponent