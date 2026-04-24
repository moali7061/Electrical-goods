import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RangeSlider from '../slider/slider.jsx';
import habib_logo from "../../assets/transparent.png";

function Navbar(props){

  const navigate = useNavigate();
  
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState([0, 20000]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ── Check if user has an active session on mount ──
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/check_session', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        setIsLoggedIn(data.loggedIn);
      } catch (err) {
        console.log(err);
      }
    };
    checkSession();
  }, []);

  // ── Logout ──
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsLoggedIn(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSliderChange = (newRange) => {
    setRange(newRange);
    if (props.onFilter) {
      props.onFilter(newRange);
    }
  };

  const go_to_page = () => {
    navigate("/login_signup");
  };

  async function all_products() {
    try {
      const response = await fetch('http://localhost:3000/api/users/get_all_products', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      if (data) {
        setProducts(data);
        navigate("/listing", { state: { products: data }, key: Date.now() });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function choose_category(event) {
    const category_selected = event.target.value;
    setCategory(category_selected);
    try {
      const response = await fetch('http://localhost:3000/api/users/product_by_category', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: category_selected }),
      });
      const data = await response.json();
      if (data) {
        setProducts(data);
        navigate("/listing", { state: { products: data }, key: Date.now() });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"white", maxHeight:'55px', width: '100%'}}>
        <div className="container-fluid">
          <a><img src={habib_logo} style={{ height: '45px' }} /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu">
                  <li><button type="button" value="cabels"      className="dropdown-item" onClick={choose_category}>Cable</button></li>
                  <li><button type="button" value="switch"      className="dropdown-item" onClick={choose_category}>Switch</button></li>
                  <li><button type="button" value="dummy"       className="dropdown-item" onClick={choose_category}>Dummy</button></li>
                  <li><button type="button" value="lamp"        className="dropdown-item" onClick={choose_category}>Lamp</button></li>
                  <li><button type="button" value="spot"        className="dropdown-item" onClick={choose_category}>Spot</button></li>
                  <li><button type="button" value="applique"    className="dropdown-item" onClick={choose_category}>Applique</button></li>
                  <li><button type="button" value="wire"        className="dropdown-item" onClick={choose_category}>LED Wire</button></li>
                  <li><button type="button" value="khartoom"    className="dropdown-item" onClick={choose_category}>Khartoom</button></li>
                  <li><button type="button" value="tba2"        className="dropdown-item" onClick={choose_category}>Tba2</button></li>
                  <li><button type="button" value="chandeliers" className="dropdown-item" onClick={choose_category}>Chandelier</button></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/view_cart">View cart</a>
              </li>
            </ul>

            {/* ── Right side of navbar ── */}
            {props.type !== "home" ? (
              <RangeSlider onRangeChange={handleSliderChange} />
            ) : isLoggedIn ? (
              <button
                onClick={handleLogout}
                style={{ border: '1px solid #dc3545', borderRadius: '8px', padding: '6px 16px', color: '#dc3545', background: 'transparent', cursor: 'pointer' }}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={go_to_page}
                style={{ border: '1px solid #185FA5', borderRadius: '8px', padding: '6px 16px', color: '#185FA5', background: 'transparent', cursor: 'pointer' }}
              >
                Login / Sign up
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;