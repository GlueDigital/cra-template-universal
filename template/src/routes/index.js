import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

const App = () =>
  <Routes>
    <Route path="/" element={<Home />} index />
  </Routes>

export default App
