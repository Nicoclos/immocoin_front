import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          
          <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />              
            
            <Route path="/profile" element={<Profile />} />
                          
            <Route path="/" element={<Home />} />
              
                        
        </Routes>
      
    </Router>
  );
};
export default App;
