import React, { useState } from 'react'
import './AddNewBookComponent.css';
import axios from 'axios';

const AddNewBookComponent = () => {

  const [isbn,setISBN] = useState('')
  const [bookName,setBookName] = useState('')
  const [authorName,setAuthorName] = useState('')
  const [genre,setgenre] = useState('')

  const ISBNHandler = (event) => {
    
    setISBN(event.target.value)
}

const bookNameHandler = (event) => {
    setBookName(event.target.value)
}

const authorNameHandler = (event) => {
    setAuthorName(event.target.value)
}

const genreHandler = (event) => {
    setgenre(event.target.value)
}

const addBookHandler = (event) => {
  event.preventDefault()
  axios
    .post(`http://localhost:3500/api/v1/book/add`,{isbn,bookName,authorName,genre})
    .then((response) =>  {
      alert(response.data.message)
      window.location.href = '/'
    })
    .catch((err) => console.log(err))
}

  return (
    <React.Fragment>
      <div>
        <form action="POST">
        <div className="isbn">
            <label htmlFor="isbn">ISBN : </label>
            <input type="text" placeholder='Enter the ISBN...' value={isbn} onChange={ISBNHandler} required/>
          </div>
          <div className="title">
            <label htmlFor="title">Book Name : </label>
            <input type="text" placeholder='Enter the book name...' value={bookName} onChange={bookNameHandler} required/>
          </div>
          <div className="author">
            <label htmlFor="author">Author Name : </label>
            <input type="text" placeholder='Enter the author name...' value={authorName} onChange={authorNameHandler} required/>
          </div>
          <div className="genre">
            <label htmlFor="genre">Genre : </label>
            <input type="text" placeholder='Enter the genre...' value={genre} onChange={genreHandler} required/>
          </div>
          <div className="addBook">
            <button className="addBook" onClick={addBookHandler}>Add Book</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddNewBookComponent