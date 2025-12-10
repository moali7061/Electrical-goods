import { useState } from "react";
import "./User_info_to_pay.css";
import { useNavigate } from "react-router-dom";

function User_info_to_pay() {
  const [paymentMethod, setPaymentMethod] = useState("cod"); // default: Cash on Delivery
  const navigate = useNavigate();
  const go_to_success = ()=>{
    navigate('/success');
  }

  return (
    <div className="user_info_page">

      <div className="payment_grid">

        {/* LEFT SIDE — USER INFORMATION */}
        <div className="payment_grid_cell left_section">
          <h2>User Information</h2>

          <div className="inputs_group">
            <input placeholder="Full Name" />
            <input placeholder="Phone Number" type="tel" />
          </div>

          <div className="inputs_group">
            <input placeholder="Address" />
          </div>

          <div className="inputs_group">
            <input placeholder="Building / House Number" />
            <input placeholder="Floor" />
          </div>
        </div>

        {/* RIGHT SIDE — ORDER DETAILS + PAYMENT METHOD */}
        <div className="payment_grid_cell right_section">
          <h2>Order Summary</h2>

          <div className="order_box">
            <p><strong>Total Items:</strong> 3</p>
            <p><strong>Subtotal:</strong> $350</p>
            <p><strong>Delivery Fee:</strong> $10</p>
            <p><strong>Total:</strong> <span className="total_amount">$360</span></p>
          </div>

          <h2>Payment Method</h2>

          <div className="payment_methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Credit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>

          {/* CONDITIONAL PAYMENT DETAILS FORM */}
          {paymentMethod === "card" && (
            <div className="payment_details_form">
              <h3>Credit Card Details</h3>
              <input placeholder="Card Number" maxLength="16" />
              <input placeholder="Cardholder Name" />
              <div className="inputs_group">
                <input placeholder="Expiry MM/YY" />
                <input placeholder="CVV" maxLength="3" />
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="payment_details_form">
              <h3>PayPal Email</h3>
              <input placeholder="Enter your PayPal Email" type="email" />
            </div>
          )}

          <button onClick={go_to_success} className="confirm_btn">
            Confirm Order
          </button>

        </div>
      </div>

    </div>
  );
}

export default User_info_to_pay;
