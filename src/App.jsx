import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/BookNavbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Books from './Pages/Books'
import BookDetails from "./pages/BookDetails";
// import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App
