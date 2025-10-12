import { useState } from "react";


function Navbar(){

  const [category, setCategory] = useState("");
  const [product, setProduct]= useState([]);

  async function choose_category(event){
      setCategory(event.target.value);
      console.log(event.target.value);
      try{
      const response = await fetch('http://localhost:3000/getproducts',{
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.parse({category: event.target.value}),
        })
        console.log("waiting for the data to be selected");
        const data = await response.json();
        console.log(data)
    }catch(err){
      console.log(err)
    }
  }
    return(<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
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
                  <a className="nav-link" href="/listing">products</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    category
                  </a>
                  <ul className="dropdown-menu">
                    
                    <li><button value="cable" className="button_in_ordered_list" onClick={choose_category}>cable</button></li>
                    <li><button value="switch" className="button_in_ordered_list">switch</button></li>
                    <li><button value="dummy" className="button_in_ordered_list">dummy</button></li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
      </div>
      </nav>
      </>);
}
export default Navbar;