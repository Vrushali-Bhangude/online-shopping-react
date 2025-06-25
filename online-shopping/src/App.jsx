import React from 'react'
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
const App = () => {
  return (
     <>
     <Nav />
     <Home /> 
     </>
  )
}

export default App
