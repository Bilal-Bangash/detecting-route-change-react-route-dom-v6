import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
