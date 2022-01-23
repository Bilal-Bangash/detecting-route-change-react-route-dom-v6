import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'
import './App.css'
import { Header } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
