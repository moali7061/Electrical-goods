import { useState, useEffect } from 'react';
import './App.css'
import List from './pages/list/list.jsx';
import Home_page from './pages/home/Home_page.jsx';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Signup from './pages/sign_up/sign_up';
import Change_password from './pages/change password/change_password';
import Cart from './pages/cart/cart';
import User_info_to_pay from './pages/user_info_to_pay/user-info_to_pay';
import Login_signup_changePassword from './pages/login_signup/login_signup_changePasswpord';
import Product_category from './pages/product_category/product_category.jsx';
import Success_page from './pages/success_page/success_page.jsx';

function App(props) {

  const [products, setProducts] = useState([]);

  const home_products = async ()=>{
    try{
      const response = await fetch('http://localhost:3000/api/users/get_all_products',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json();
      console.log(data);
      setProducts(data);
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

        <Route path="/listing" element={<List to_be_mapped={products}/>} />

        <Route path='/view_cart' element={<Cart />}/>

        <Route path='/payment_details' element={<User_info_to_pay/>}/>

        <Route path='/login_signup' element={<Login_signup_changePassword/>}/>
        
        <Route path='/categories' element={<Product_category/>}/>

        <Route path='/success' element={<Success_page/>}/>

      </Routes>
    </Router>
  )
}

export default App;
