import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './assets/Signup';
import Login from './assets/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Navbar from './assets/Navbar'; 

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Navbar />
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
