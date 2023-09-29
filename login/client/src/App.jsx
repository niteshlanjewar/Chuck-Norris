import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './assets/Signup';
import Login from './assets/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Navbar from './assets/Navbar'; 

function App() {
  
  const [userFullName, setUserFullName] = useState('');

  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/register" element={<Signup setUserFullName={setUserFullName} />} />
          <Route path="/login" element={<Login />} />
         
          <Route path="/home" element={<div><Navbar userFullName={userFullName} /><Home /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
