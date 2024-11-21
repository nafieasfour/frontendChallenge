import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img
          src="/images/image-product-1.jpg"
          className={styles.MainPhoto}
        ></img>
        <div className={styles.Thumbnails}>
          <img
            src="/images/image-product-1.jpg"
            className={styles.ThumbnailsPhoto}
          ></img>
          <img
            src="/images/image-product-1.jpg"
            className={styles.ThumbnailsPhoto}
          ></img>
          <img
            src="/images/image-product-1.jpg"
            className={styles.ThumbnailsPhoto}
          ></img>
          <img
            src="/images/image-product-1.jpg"
            className={styles.ThumbnailsPhoto}
          ></img>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.profuctInfo}>
          <p className={styles.companyName}>SNEAKERS COMPANY</p>
          <p className={styles.productName}>Fall Limited Edition Sneakers</p>
          <p className={styles.productDesc}>
            Those low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.price}>
            <p className={styles.discountedPrice}>$125.00</p>
            <p className={styles.disountAmount}>50%</p>
          </div>
          <p className={styles.normalPrice}>$250.00</p>
        </div>
        <div className={styles.interaction}>
          <div className={styles.quantityButtons}>
            <button className={styles.plusButton}>-</button>
            <span>0</span>
            <button className={styles.plusButton}>+</button>
          </div>
          <button className={styles.AddButton}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
