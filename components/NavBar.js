import Image from "next/image";
import React, { useState } from "react";
import Cart from "./Cart";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  //This code for small screen start
  // function StateChangerBasedonUI() {
  //   const [isSmallScreen, setIsSmallScreen] = useState(false);

  //   useEffect(() => {
  //     const checkScreenSize = () => {
  //       setIsSmallScreen(window.innerWidth < 375);
  //     };

  //     checkScreenSize();
  //     window.addEventListener("resize", checkScreenSize);

  //     return () => window.removeEventListener("resize", checkScreenSize);
  //   }, []);
  // }

  // //This code for small screen end

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
        <img
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
      {isCartOpen && <Cart />}
    </div>
  );
}
