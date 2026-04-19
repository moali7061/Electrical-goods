import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
    const [thelist, setThelist] = useState([]);
    const [u_username, setU_username] = useState("");
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const go = () => { navigate('/payment_details') };
    const back = () => { navigate('/listing') };

    const get_products = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users/get_order', {
                method: 'GET',
                credentials: 'include'
            });
            const data = await response.json();
            if (data.message === "correct") {
                setThelist(data.list_of_results);
                setU_username(data.username);
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        get_products();
    }, []);

    const grandTotal = thelist.reduce((sum, item) => sum + Number(item.total_price), 0);

    return (
        <div className="cart-wrap">

            <div className="cart-header">
                <h1 className="cart-title">
                    {u_username ? `${u_username}'s cart` : "Your cart"}
                </h1>
                {!loading && (
                    <span className="cart-count">{thelist.length} item{thelist.length !== 1 ? "s" : ""}</span>
                )}
            </div>

            {loading ? (
                <div className="empty-state">Loading your cart...</div>
            ) : thelist.length === 0 ? (
                <div className="empty-state">
                    <p>Your cart is empty.</p>
                    <button className="btn-back" onClick={back}>Browse products</button>
                </div>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thelist.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <p className="product-name">
                                            {item.product_name}
                                            <span className="product-id">#{item.p_id}</span>
                                        </p>
                                        <p className="product-desc">{item.description}</p>
                                    </td>
                                    <td><span className="price-text">EGP {Number(item.price).toLocaleString()}</span></td>
                                    <td><span className="qty-badge">{item.quantity}</span></td>
                                    <td><span className="total-text">EGP {Number(item.total_price).toLocaleString()}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-footer">
                        <div className="grand-total">
                            <span className="grand-total-label">Order total</span>
                            <span className="grand-total-value">EGP {grandTotal.toLocaleString()}</span>
                        </div>
                        <div className="btn-group">
                            <button className="btn-back" onClick={back}>← Go back</button>
                            <button className="btn-checkout" onClick={go}>Proceed to checkout →</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;