import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
    )
};

export default App;
