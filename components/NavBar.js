import Image from "next/image";
import React, { useState } from "react";
import Cart from "./Cart";
import styles from "./NavBar.module.css";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  //const [cartOpen, setcartOpen] = useState(false);
  const { cartOpen, setCartOpen } = useCart();

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <button className={styles.menuIcon}>
          <Image
            src={"/images/icon-menu.svg"}
            className={styles.menuIconPhoto}
            width={50}
            height={50}
            alt="icon"
          ></Image>
        </button>
        <Image
          src={"/images/logo.svg"}
          width={200}
          height={30}
          className={styles.logo}
          alt="icon2"
        ></Image>
        <ul className={styles.list}>
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/about">Men</a>
          </li>
          <li>
            <a href="/contact">Women</a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <img //better to add the two image in one div becasue its default display is inline.
          src="/images/icon-cart.svg"
          className={styles.cartImage}
          onClick={toggleCart}
          alt="Cart Icon"
        />
        <img
          src="/images/image-avatar.png"
          className={styles.avatarImage}
          alt="Avatar"
        />
      </div>
      {cartOpen && <Cart />}
    </div>
  );
}
