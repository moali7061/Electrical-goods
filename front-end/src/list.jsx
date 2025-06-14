import PropTypes from "prop-types";
import Card from "./card";
import Navbar from "./Navbar";


function List(props){
    const products = props.to_be_mapped;

    if(products.length >0){
      return (
        <>
          <Navbar/>
          {products.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              description={element.description}
              count={element.count}
              price={element.price}
            />
          ))}
        </>
      );
    }else{
      return(
        <div className="noproducs">
          <Navbar/>
          <h4 style={{marginLeft: 'auto', fontSize: '50px'}}>no products available yet</h4>
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
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
    })
  ),
};

export default List;