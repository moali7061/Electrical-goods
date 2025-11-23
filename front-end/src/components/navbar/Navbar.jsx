import { useState } from "react";
import List from "../../pages/list/list.jsx";
import { useNavigate } from "react-router-dom";
import RangeSlider from '../slider/slider.jsx';
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

  const go_to_page = ()=>{
    navigate("/login_signup");
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
        navigate("/listing", { state: { products: products }, key: Date.now() }); // add key here
    }
    }catch(err){
      console.log(err);
    }
  }
  async function choose_category(event){

      const category_selected = event.target.value;
      setCategory(category_selected);
      
      try{
      const response = await fetch('http://localhost:3000/api/users/product_by_category',{
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({category: category_selected}),
        })
      
        const data = await response.json();
        
        const products = data;
        if(products){
          setProducts(products);
          navigate("/listing", { state: { products: products }, key: Date.now() });
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
                  <button className="nav-link btn btn-link" onClick={all_products}>All products</button>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn btn-link"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    category
                  </button>
                  <ul className="dropdown-menu">
                    
                    <li><button type="button" value="cabels" className="dropdown-item" onClick={choose_category}>cable</button></li>
                    <li><button type="button" value="switch" className="dropdown-item" onClick={choose_category}>switch</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>dummy</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>lamp</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>spot</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>applique</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>led wire</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>khartoom</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>tba2</button></li>
                    <li><button type="button" value="dummy" className="dropdown-item" onClick={choose_category}>chandelier</button></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/view_cart">view cart</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            {props.type!=="home"? (<RangeSlider onRangeChange={handleSliderChange}/>):(<button onClick={go_to_page}>login/sign up</button>)}
            </div>
      </div>
      </nav>
      </>);
}
export default Navbar;