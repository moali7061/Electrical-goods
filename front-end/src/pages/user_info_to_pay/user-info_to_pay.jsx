import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User_info_to_pay.css";

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
    paypalEmail: "",
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
    (paymentMethod === "cod" ||
      (paymentMethod === "card" &&
        formData.cardNumber &&
        formData.cardName &&
        formData.expiry &&
        formData.cvv) ||
      (paymentMethod === "paypal" && formData.paypalEmail));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    navigate("/success");
  };

  const fieldClass = (value) =>
    `pay-input${submitted && !value ? " pay-input--error" : ""}`;

  return (
    <div className="checkout-page">
      <form className="checkout-grid" onSubmit={handleSubmit}>

        {/* ── LEFT — delivery details ── */}
        <div className="checkout-left">
          <p className="sec-label">Step 1 of 2</p>
          <h2 className="sec-title">Delivery details</h2>

          <div className="field-row">
            <div className="field-wrap">
              <label className="field-label">Full name</label>
              <input
                name="fullName"
                className={fieldClass(formData.fullName)}
                placeholder="Ahmed Ali"
                value={formData.fullName}
                onChange={handleChange}
              />
              {submitted && !formData.fullName && (
                <span className="field-error">Full name is required</span>
              )}
            </div>

            <div className="field-wrap">
              <label className="field-label">Phone number</label>
              <input
                name="phone"
                type="tel"
                className={fieldClass(formData.phone)}
                placeholder="01xxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
              />
              {submitted && !formData.phone && (
                <span className="field-error">Phone number is required</span>
              )}
            </div>
          </div>

          <div className="field-wrap field-full">
            <label className="field-label">Street address</label>
            <input
              name="address"
              className={fieldClass(formData.address)}
              placeholder="123 Tahrir Street, Cairo"
              value={formData.address}
              onChange={handleChange}
            />
            {submitted && !formData.address && (
              <span className="field-error">Address is required</span>
            )}
          </div>

          <div className="field-row">
            <div className="field-wrap">
              <label className="field-label">Building / house no.</label>
              <input
                name="building"
                className={fieldClass(formData.building)}
                placeholder="Building 4"
                value={formData.building}
                onChange={handleChange}
              />
              {submitted && !formData.building && (
                <span className="field-error">Building number is required</span>
              )}
            </div>

            <div className="field-wrap">
              <label className="field-label">Floor</label>
              <input
                name="floor"
                className={fieldClass(formData.floor)}
                placeholder="3rd floor"
                value={formData.floor}
                onChange={handleChange}
              />
              {submitted && !formData.floor && (
                <span className="field-error">Floor is required</span>
              )}
            </div>
          </div>
        </div>

        {/* ── RIGHT — order summary + payment ── */}
        <div className="checkout-right">
          <p className="sec-label">Your order</p>
          <h2 className="sec-title">Order summary</h2>

          <div className="order-box">
            <div className="order-row">
              <span>Items</span>
              <span>3</span>
            </div>
            <div className="order-row">
              <span>Subtotal</span>
              <span>EGP 350</span>
            </div>
            <div className="order-row">
              <span>Delivery</span>
              <span>EGP 50</span>
            </div>
            <div className="order-row order-row--total">
              <span>Total</span>
              <span className="order-total-val">EGP 400</span>
            </div>
          </div>

          <hr className="divider" />

          <p className="sec-label">Payment method</p>

          <div className="pm-options">
            {[
              { id: "cod", label: "Cash on delivery" },
              { id: "card", label: "Credit card" },
              { id: "paypal", label: "PayPal" },
            ].map((opt) => (
              <div
                key={opt.id}
                className={`pm-opt${paymentMethod === opt.id ? " pm-opt--active" : ""}`}
                onClick={() => setPaymentMethod(opt.id)}
              >
                <div className="pm-dot" />
                <span>{opt.label}</span>
              </div>
            ))}
          </div>

          {paymentMethod === "card" && (
            <div className="payment-extra">
              <input
                name="cardNumber"
                className={fieldClass(formData.cardNumber)}
                placeholder="Card number"
                maxLength="16"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              {submitted && !formData.cardNumber && (
                <span className="field-error">Card number is required</span>
              )}

              <input
                name="cardName"
                className={fieldClass(formData.cardName)}
                placeholder="Cardholder name"
                value={formData.cardName}
                onChange={handleChange}
              />
              {submitted && !formData.cardName && (
                <span className="field-error">Cardholder name is required</span>
              )}

              <div className="field-row">
                <div className="field-wrap">
                  <input
                    name="expiry"
                    className={fieldClass(formData.expiry)}
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                  />
                  {submitted && !formData.expiry && (
                    <span className="field-error">Required</span>
                  )}
                </div>
                <div className="field-wrap">
                  <input
                    name="cvv"
                    className={fieldClass(formData.cvv)}
                    placeholder="CVV"
                    maxLength="3"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                  {submitted && !formData.cvv && (
                    <span className="field-error">Required</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="payment-extra">
              <input
                name="paypalEmail"
                type="email"
                className={fieldClass(formData.paypalEmail)}
                placeholder="PayPal email"
                value={formData.paypalEmail}
                onChange={handleChange}
              />
              {submitted && !formData.paypalEmail && (
                <span className="field-error">PayPal email is required</span>
              )}
            </div>
          )}

          <button type="submit" className="confirm-btn">
            Confirm order →
          </button>
        </div>
      </form>
    </div>
  );
}

export default User_info_to_pay;