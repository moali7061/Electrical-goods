import { useState, useEffect } from 'react';
import './App.css'
import List from './list';
import Home_page from './Home_page';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Signup from './sign_up';
import Change_password from './change_password';

function App(props) {

  const [products, setProducts] = useState([]);

  const home_products = async ()=>{
    try{
      const response = await fetch('http://localhost:3000/getproducts',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json();
      setProducts(data.all_products);
    }catch(err){
      alert('something went wrong');
    }
  }

  useEffect(() => {
    home_products();
  }, []);
 
  return (
      <Router>
      <Routes>
        <Route path='/login' element= {<Login/>}  />
 
        <Route path='/sign_up' element= {<Signup/>}  />
       
        <Route path="/" element={<Home_page />} />

        <Route path="/change_password" element={<Change_password/>} />

        <Route path="/listing" element={<List sentence='no products for home available' to_be_mapped={products}/>} />

      </Routes>
  </Router>
  )
}

export default App;
