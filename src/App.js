import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watch from './Components/Watch';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch" element={<Watch />} />

          
      </Routes>
    </BrowserRouter>
  )
}


export default App