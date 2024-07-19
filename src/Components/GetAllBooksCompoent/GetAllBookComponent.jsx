import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './GetAllBooksComponent.css'
import BookComponent from '../BookComponent/BookComponent'
const GetAllBookComponent = () => {

    const [bookData, setBookData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3500/api/v1/book/get`)
            .then(response => setBookData(response.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <div className="home-container">    
                <h1>LIST OF BOOKS</h1>
                <div className="container">
                    {
                            bookData && bookData.map((iterator,index) => (
                            <BookComponent book={iterator} key={index}/>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default GetAllBookComponent