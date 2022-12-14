import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Watch from './Components/Watch';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  const [progress, setProgress] = useState(0)
  return (
    <BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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