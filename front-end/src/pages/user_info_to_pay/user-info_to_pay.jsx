import { useState } from "react";
import "./User_info_to_pay.css";
import { useNavigate } from "react-router-dom";

function User_info_to_pay() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    building: "",
    floor: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    paypalEmail: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.fullName &&
    formData.phone &&
    formData.address &&
    formData.building &&
    formData.floor &&
    (
      paymentMethod === "cod" ||
      (paymentMethod === "card" &&
        formData.cardNumber &&
        formData.cardName &&
        formData.expiry &&
        formData.cvv) ||
      (paymentMethod === "paypal" && formData.paypalEmail)
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) return;

    navigate("/success");
  };

  const errorClass = (value) =>
    !value && submitted ? "input_error" : "";

  return (
    <form className="user_info_page" onSubmit={handleSubmit}>
      <div className="payment_grid">

        {/* LEFT SIDE — USER INFORMATION */}
        <div className="payment_grid_cell left_section">
          <h2>User Information</h2>

          <div className="inputs_group">
            <div>
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={errorClass(formData.fullName)}
              />
              {submitted && !formData.fullName && (
                <span
                  className="error_text"
                  style={{ visibility: submitted && !formData.fullName ? "visible" : "hidden" }}
                >
                  Full name is required
                </span>

              )}
            </div>

            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={errorClass(formData.phone)}
              />
              {submitted && !formData.phone && (
                <span
                  className="error_text"
                  style={{ visibility: submitted && !formData.phone ? "visible" : "hidden" }}
                >
                  phone is required
                </span>
              )}
            </div>
          </div>

          <div className="inputs_group">
            <div>
              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className={errorClass(formData.address)}
              />
              {submitted && !formData.address && (
                <span
                  className="error_text"
                  style={{ visibility: submitted && !formData.address ? "visible" : "hidden" }}
                >
                  address is required
                </span>
              )}
            </div>
          </div>

          <div className="inputs_group">
            <div>
              <input
                name="building"
                placeholder="Building / House Number"
                value={formData.building}
                onChange={handleChange}
                className={errorClass(formData.building)}
              />
              {submitted && !formData.building && (
                <span
                  className="error_text"
                  style={{ visibility: submitted && !formData.phone ? "visible" : "hidden" }}
                >
                  Building / House Number is required
                </span>
              )}
            </div>

            <div>
              <input
                name="floor"
                placeholder="Floor"
                value={formData.floor}
                onChange={handleChange}
                className={errorClass(formData.floor)}
              />
              {submitted && !formData.floor && (
                <span
                  className="error_text"
                  style={{ visibility: submitted && !formData.phone ? "visible" : "hidden" }}
                >
                  floor is required
                </span>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER + PAYMENT */}
        <div className="payment_grid_cell right_section">
          <h2>Order Summary</h2>

          <div className="order_box">
            <p><strong>Total Items:</strong> 3</p>
            <p><strong>Subtotal:</strong> $350</p>
            <p><strong>Delivery Fee:</strong> $10</p>
            <p>
              <strong>Total:</strong>{" "}
              <span className="total_amount">$360</span>
            </p>
          </div>

          <h2>Payment Method</h2>

          <div className="payment_methods">
            <label>
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Credit Card
            </label>

            <label>
              <input
                type="radio"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>

          {/* CARD PAYMENT */}
          {paymentMethod === "card" && (
            <div className="payment_details_form">
              <h3>Credit Card Details</h3>

              <input
                name="cardNumber"
                placeholder="Card Number"
                maxLength="16"
                value={formData.cardNumber}
                onChange={handleChange}
                className={errorClass(formData.cardNumber)}
              />
              {submitted && !formData.cardNumber && (
                <span className="error_text">Card number is required</span>
              )}

              <input
                name="cardName"
                placeholder="Cardholder Name"
                value={formData.cardName}
                onChange={handleChange}
                className={errorClass(formData.cardName)}
              />
              {submitted && !formData.cardName && (
                <span className="error_text">Cardholder name is required</span>
              )}

              <div className="inputs_group">
                <div>
                  <input
                    name="expiry"
                    placeholder="Expiry MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                    className={errorClass(formData.expiry)}
                  />
                  {submitted && !formData.expiry && (
                    <span className="error_text">Expiry date is required</span>
                  )}
                </div>

                <div>
                  <input
                    name="cvv"
                    placeholder="CVV"
                    maxLength="3"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={errorClass(formData.cvv)}
                  />
                  {submitted && !formData.cvv && (
                    <span className="error_text">CVV is required</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* PAYPAL */}
          {paymentMethod === "paypal" && (
            <div className="payment_details_form">
              <h3>PayPal Email</h3>
              <input
                name="paypalEmail"
                type="email"
                placeholder="PayPal Email"
                value={formData.paypalEmail}
                onChange={handleChange}
                className={errorClass(formData.paypalEmail)}
              />
              {submitted && !formData.paypalEmail && (
                <span className="error_text">PayPal email is required</span>
              )}
            </div>
          )}

          <button type="submit" className="confirm_btn">
            Confirm Order
          </button>
        </div>
      </div>
    </form>
  );
}

export default User_info_to_pay;
