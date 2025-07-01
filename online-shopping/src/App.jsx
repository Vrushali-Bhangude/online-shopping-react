import React from 'react'

import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Kids from './views/Kid/Kids';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
     <>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>
               <Route path="/kids" element={<Kids/>}/>

          </Routes>
      </BrowserRouter>
     </>

  )
}

export default App
