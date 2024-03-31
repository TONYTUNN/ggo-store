import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const { getTotalCart , all_product, cartIterms, removeCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (cartIterms[e.id] > 0) {
            return (
              <div key={e.id} className="cartitems-format cartitems-format-main">
                <img src={e.image} alt={e.name} className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartIterms[e.id]}
                </button>
                <p>${e.new_price * cartIterms[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeCart(e.id)}
                  alt="Remove" 
                  className="cartitem-remove-icon"
                />
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitems-total-item">
                <p>subtotal</p>
                <p>${ getTotalCart ()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${ getTotalCart ()}</h3>
              </div>
            </div>
            <button>PROEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>if you have promo code , Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
