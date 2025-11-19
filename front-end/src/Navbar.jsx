import { useState } from "react";
import List from "./list";
import { useNavigate } from "react-router-dom";
import RangeSlider from '../src/slider.jsx';
import PropTypes from "prop-types";

function Navbar(props){

  const navigate = useNavigate();
  
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState([0,20000]);

  const handleSliderChange = (newRange) => {
    setRange(newRange); 
    console.log("the new range is " ,newRange);     
    if (props.onFilter) {
      props.onFilter(newRange);
    } 
  };


  async function all_products(event){
    try{
      const response = await fetch('http://localhost:3000/api/users/get_all_products',{
          method: "GET",
          headers: { "Content-Type": "application/json"}
      })
      const data = await response.json();
      const products = data;
      //console.log("the products here is ",products);
      if(products){
          setProducts(products);
          navigate("/listing", {state:{products: products}});

        }
    }catch(err){
      console.log(err);
    }
  }
  async function choose_category(event){

      console.log("choose_category function triggered");
      const category_selected = event.target.value;
      setCategory(category_selected);
      console.log("the category that is selected keep in mind that I am in the navbar.jsx now line 12"+category_selected);
      
      try{
      const response = await fetch('http://localhost:3000/api/users/product_by_category',{
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({category: category_selected}),
        })
      
        const data = await response.json();
        console.log("data recieved: " ,data);
        
        const products = data;
        if(products){
          setProducts(products);
          navigate("/listing", {state:{products: products}});

        }
        
      }catch(err){
      console.log(err)
    }
  }
    return(<>
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"white", maxHeight:'55px', width: '100%'}}>
          <div className="container-fluid">
            <a className="navbar-brand" >Habib lightning</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/listing" value="" onClick={all_products}>All products</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    category
                  </a>
                  <ul className="dropdown-menu">
                    
                    <li><button type="button" value="cabels" className="button_in_ordered_list" onClick={choose_category}>cable</button></li>
                    <li><button type="button" value="switch" className="button_in_ordered_list" onClick={choose_category}>switch</button></li>
                    <li><button type="button" value="dummy" className="button_in_ordered_list" onClick={choose_category}>dummy</button></li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/view_cart" value="">view cart</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            {props.type!=="home" && <RangeSlider onRangeChange={handleSliderChange}/>}
            </div>
      </div>
      </nav>
      </>);
}
export default Navbar;