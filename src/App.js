import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import './App.css';

function App() {
    return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
    )
};

export default App;
