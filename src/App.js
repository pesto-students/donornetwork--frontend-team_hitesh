import React from 'react'
import Home from './component/Home/Home'
import { Routes, Route } from "react-router-dom";
import Searchbank from './component/Searchbank/Searchbank';
import Login from './component/Login/Login';
import User from './component/User/User';
import {PrivateRoute} from './Protectedroute';
import Donorform from './component/Donorform/Donorform';
import Requesterform from './component/Requesterform/Requesterform';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <>
    <Header/>
    
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/searchbloodbank" element={<Searchbank />}/>
    <Route path="/Blog" element={<Blog />}/>
    <Route path="/regsdonor" element={<Donorform />}/>
    <Route path="/regesrequester" element={<Requesterform />}/>
    <Route path="/loginbtn" element={<Login />}/>
    <Route
  path="/user"
  element={
    <PrivateRoute>
      <User />
    </PrivateRoute>
  }
/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
