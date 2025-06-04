import PropTypes from "prop-types";
import Card from "./card";
import Navbar from "./Navbar";

function List(props){
    const products = props.to_be_mapped;

   
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