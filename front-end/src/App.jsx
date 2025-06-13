import { useState } from 'react'
import './App.css'
import List from './List';
import Home_page from './Home_page';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'


function App(props) {

   
  const products = [
    {title: "elsewedy", description: "cable 30 x 30 you must buy as it is very important and can work in many things", count: 10, price: 120},
    {title: "elsewedy", description: "cable 30 x 30 you must buy as it is very important and can work in many things", count: 10, price: 120}
  ];

  return (
      <Router>
      <Routes>
        <Route path='/login' element= {<Login/>}  />
        <Route path="/home" element={<Home_page />} />
        <Route path="/listing" element={<List to_be_mapped={products}/>} />

      </Routes>
  </Router>
  )
}

export default App;
