import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeItemFromCart } = useCart();

  const handleDelete = (index) => {
    removeItemFromCart(index);
  };

  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>Cart</h3>
      <div>
        <hr className={styles.HrLineCart}></hr>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <img src={item.mainImage} alt={item.productName} />
            <div>
              <p>{item.productName}</p>
              <div className={styles.totalPaymen}>
                <p>
                  {item.discountedPrice} x {item.quantity} $
                  {(
                    parseFloat(item.discountedPrice.slice(1)) * item.quantity
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(index)}
            >
              <img
                src="/images/icon-delete.svg"
                style={{ height: 50, width: 50 }}
                alt="Delete"
              />
            </button>
          </div>
        ))
      )}
      <button
        className={styles.checkoutButton}
        onClick={() => alert("Proceeding to checkout")}
      >
        Checkout
      </button>
    </div>
  );
}
