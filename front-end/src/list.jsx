import PropTypes from "prop-types";
import Card from "./card";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

 
function List(props){
  const location = useLocation(); 
  console.log("props haa", props.to_be_mapped); 
  const [products, setProducts] =  useState(location.state?.products || props.to_be_mapped || []);
  const [priceRange, setPriceRange] = useState([0, 20000]);

  const updateProductCountFrontend = (product_id, newCount) => {
    setProducts(prev =>
      prev.map(p =>
        p.product_id === product_id ? { ...p, count: newCount } : p
      )
    );
  };

  const filteredProducts = products.filter(p => 
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  //console.log("products here is" ,products);
    if(products.length >0){
      return (
        <div className="list_order">
          <div className="list">

            <Navbar type="listing" onFilter={(range) => setPriceRange(range)} />

            {filteredProducts.map((element, index) => (
              <Card
                key={index}
                product_name={element.product_name}
                description={element.description}
                count={element.count}
                price={element.price}
                product_id={element.product_id}
                updateCount={updateProductCountFrontend}
              />
            ))} 
          </div>
        </div>
      );
    }else{
      return(
        <div className="noproducs">
          <Navbar/>
          <h4 style={{marginLeft: 'auto', fontSize: '50px'}}>no products to be shown now</h4>
        </div>
      );
    }

}



List.defaultProps = {
    to_be_mapped: []
}

List.propTypes = {
  to_be_mapped: PropTypes.arrayOf(
    PropTypes.shape({
      product_name: PropTypes.string.isRequired,
      description: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
    })
  ),
};

export default List;