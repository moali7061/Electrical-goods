import { useState, useEffect } from 'react';
import './App.css'
import List from './List';
import Home_page from './Home_page';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'


function App(props) {

   const [products, setProducts] = useState([]);

  // const products = [
  //   {title: "elsewedy", description: "cable 30 x 30 you must buy as it is very important and can work in many things", count: 10, price: 120},
  //   {title: "elsewedy", description: "cable 30 x 30 you must buy as it is very important and can work in many things", count: 10, price: 120}
  // ];

   useEffect(() => {
    fetch('http://localhost:3000/listing')
      .then((res) => res.json())
      .then((data) => {
        if (data.all_products) {
          setProducts(data.all_products);
        } else {
          console.log(data.message); // "no products in the website yet"
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

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
