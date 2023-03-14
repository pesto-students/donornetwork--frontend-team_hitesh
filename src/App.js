import React from 'react'
import Home from './component/Home/Home'
import { Routes, Route } from "react-router-dom";
import Searchbank from './component/Searchbank/Searchbank';
import Login from './component/Login/Login';
const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/searchbloodbank" element={<Searchbank />}/>
    <Route path="/loginbtn" element={<Login />}/>
    </Routes>
    </>
  )
}

export default App
