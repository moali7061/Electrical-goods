import { useState } from "react";
import "./card.css";

function Card(props) {
  const [count, setCount] = useState(0);
  const [availableCount, setAvailableCount] = useState(props.count);

  const increment = () => {
    if (count >= availableCount) return;
    setCount((c) => c + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount((c) => c - 1);
  };

  const adding = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/add_order", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: props.product_id,
          count: count,
          price_one: props.price,
        }),
      });

      const data = await response.json();
      alert(data.message.message);
      props.updateCount(props.product_id, data.message.count);
      setAvailableCount(data.message.count);
      setCount(0);
    } catch (err) {
      console.error(err);
      alert("Error adding to cart");
    }
  };

  const isSoldOut = availableCount <= 0;
  const isLowStock = availableCount > 0 && availableCount <= 10;

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img
          src={`/${props.product_name}.png`}
          className="product-card__img"
          alt={props.product_name}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{props.product_name}</h3>
        <p className="product-card__desc">{props.description}</p>

        <div className="product-card__meta">
          <span className="product-card__price">EGP {props.price.toLocaleString()}</span>
          <span className={`product-card__stock ${isSoldOut ? "sold-out" : isLowStock ? "low-stock" : "in-stock"}`}>
            {isSoldOut ? "Sold out" : isLowStock ? `Only ${availableCount} left` : `${availableCount} available`}
          </span>
        </div>

        <div className="product-card__footer">
          <div className="qty-ctrl">
            <button
              className="qty-btn"
              onClick={decrement}
              disabled={count <= 0}
              aria-label="Decrease quantity"
            >−</button>
            <span className="qty-num">{count}</span>
            <button
              className="qty-btn"
              onClick={increment}
              disabled={isSoldOut || count >= availableCount}
              aria-label="Increase quantity"
            >+</button>
          </div>

          <button
            className="add-btn"
            onClick={adding}
            disabled={isSoldOut || count <= 0}
          >
            {isSoldOut ? "Sold out" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  product_name: "Unknown product",
  description: "",
  count: 0,
  price: 0,
  product_id: 0,
};

export default Card;