import PropTypes from "prop-types";
import Card from "./card";
import Navbar from "./Navbar";


function List(props){
    const products = props.to_be_mapped;

    if(products.length >0){
      return (
        <div className="list_order">
          <div className="list">
            <Navbar/>
            {products.map((element, index) => (
              <Card
                key={index}
                product_name={element.product_name}
                description={element.description}
                count={element.count}
                price={element.price}
                product_id={element.product_id}
              />
            ))} 
          </div>
        </div>
      );
    }else{
      return(
        <div className="noproducs">
          <Navbar/>
          <h4 style={{marginLeft: 'auto', fontSize: '50px'}}>{props.sentence}</h4>
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