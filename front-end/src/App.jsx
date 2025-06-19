import { useState, useEffect } from 'react';
import './App.css'
import List from './List';
import Home_page from './Home_page';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Signup from './sign_up';


function App(props) {

   const [products, setProducts] = useState([]);

  return (
      <Router>
      <Routes>
        <Route path='/login' element= {<Login/>}  />
 
        <Route path='/sign_up' element= {<Signup/>}  />
       
        <Route path="/home" element={<Home_page />} />

        <Route path="/listing" element={<List sentence='no products for home available' to_be_mapped={products}/>} />

      </Routes>
  </Router>
  )
}

export default App;
