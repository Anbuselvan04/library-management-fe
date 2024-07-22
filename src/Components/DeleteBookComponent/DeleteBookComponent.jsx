import axios from "axios";
import React, { useState } from "react";

const DeleteBookComponent = () => {
    const [isbn, setISBN] = useState("");
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [genre, setgenre] = useState("");

    const ISBNHandler = (event) => {
        setISBN(event.target.value);
    }

    const validateHandler = (event) => {
        event.preventDefault()
        console.log(isbn)
        axios
            .post(`http://localhost:3500/api/v1/book/validate`, {isbn})
            .then((response) => {
                setISBN(response.data.isbn),
                setBookName(response.data.bookName)
                setAuthorName(response.data.authorName)
                setgenre(response.data.genre)
            })
            .catch((error) => console.log(error.message))
    }

    const deleteBookHandler = (event) => {
        event.preventDefault()

        axios
            .delete(`http://localhost:3500/api/v1/book/delete/${isbn}`)
            .then((response) => {
                alert(`Book Data of ISBN ${response.data.isbn} is deleted successfully`)
                window.location.href = '/'
            })
            .catch((error) => console.log(error))
    }

    return (
        <React.Fragment>
            <div>
                <form action="POST">
                    <div className="isbn">
                        <label htmlFor="isbn">ISBN : </label>
                        <input
                            type="text"
                            placeholder="Enter the ISBN..."
                            value={isbn}
                            onChange={ISBNHandler}
                            required
                        />
                    </div>
                    <div className="validate">
                        <button className="validate" onClick={validateHandler}>Validate</button>
                    </div>
                    <div className="title">
                        <label htmlFor="title">Book Name : </label>
                        <input
                            type="text"
                            placeholder="Enter the book name..."
                            value={bookName}
                            readOnly
                            required
                        />
                    </div>
                    <div className="author">
                        <label htmlFor="author">Author Name : </label>
                        <input
                            type="text"
                            placeholder="Enter the author name..."
                            value={authorName}
                            readOnly
                            required
                        />
                    </div>
                    <div className="genre">
                        <label htmlFor="genre">Genre : </label>
                        <input
                            type="text"
                            placeholder="Enter the genre..."
                            value={genre}
                            readOnly
                            required
                        />
                    </div>
                    <div className="deleteBook">
                        <button className="deleteBook" onClick={deleteBookHandler}>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default DeleteBookComponent;
