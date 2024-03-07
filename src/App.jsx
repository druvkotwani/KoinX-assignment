import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coin from './Coin'
import Home from './Home'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/coin/:coinName" element={<Coin />} />
        {/* <Route path="/leetcodeWorth" element={<Worth />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App