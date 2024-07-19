import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GetAllBookComponent from './Components/GetAllBooksCompoent/GetAllBookComponent'
import AddNewBookComponent from './Components/AddNewBookComponent/AddNewBookComponent'
import EditBookComponent from './Components/EditBookComponent/EditBookComponent'
import DeleteBookComponent from './Components/DeleteBookComponent/DeleteBookComponent'
const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/add'>Add Book</Link>
            </li>
            <li>
              <Link to='/edit'>Edit Book</Link>
            </li>
            <li>
              <Link to='/delete'>Delete Book</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path='/' element={<GetAllBookComponent />}></Route>
        <Route exact path='/add' element={<AddNewBookComponent />}></Route>
        <Route exact path='/edit' element={<EditBookComponent />}></Route>
        <Route exact path='/delete' element={<DeleteBookComponent />}></Route>
      </Routes>
    </Router>
  )
}

export default App
