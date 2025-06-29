import React from 'react'

import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
     <>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>
          </Routes>
      </BrowserRouter>
     </>

  )
}

export default App
