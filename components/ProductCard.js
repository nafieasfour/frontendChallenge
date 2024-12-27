import React, { useState } from "react";
import ImageModal from "./ImageModal";
import styles from "./ProductCard.module.css";
import { useCart } from "../context/CartContext";

export default function ProductCard() {
  const [mainImage, setMainImage] = useState("/images/image-product-1.jpg"); //encode the image into base64
  //avoid base64 if it's not neccessary
  // image-product-1.jpg should be dynamic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const { addItemToCart, toggleCart } = useCart();

  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  const handleMainImageClick = () => {
    setIsModalOpen(true);
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (quantity === 0) return;

    const productName = "Fall Limited Edition Sneakers";
    const discountedPrice = "$125.00";

    const newCartItem = {
      productName,
      mainImage,
      discountedPrice,
      quantity,
    };

    addItemToCart(newCartItem);
    toggleCart();
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img
          src={mainImage}
          className={styles.MainPhoto}
          id="main-image"
          alt="Main Product"
          onClick={handleMainImageClick}
        />

        <div className={styles.Thumbnails}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className={styles.ThumbnailsPhoto}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(src)}
            />
          ))}
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.productInfo}>
          <p className={styles.companyName}>SNEAKERS COMPANY</p>
          <p className={styles.productName}>Fall Limited Edition Sneakers</p>
          <p className={styles.productDesc}>
            Those low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.price}>
            <p className={styles.discountedPrice}>$125.00</p>
            <p className={styles.discountAmount}>50%</p>
          </div>
          <p className={styles.normalPrice}>$250.00</p>
        </div>
        <div className={styles.interaction}>
          <div className={styles.quantityButtons}>
            <button className={styles.plusButton} onClick={handleDecrease}>
              -
            </button>
            <span>{quantity}</span>
            <button className={styles.plusButton} onClick={handleIncrease}>
              +
            </button>
          </div>
          <button
            className={styles.AddButton}
            onClick={handleAddToCart}
            disabled={quantity === 0}
          >
            Add to cart
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          images={images}
          currentImage={mainImage}
          onClose={() => setIsModalOpen(false)}
          onThumbnailClick={handleThumbnailClick}
        />
      )}
    </div>
  );
}
