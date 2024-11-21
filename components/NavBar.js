import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Image
          src={"/images/logo.svg"}
          width={200}
          height={30}
          className={styles.logo}
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
        <img src="/images/icon-cart.svg" className={styles.cartImage}></img>
        <img
          src="/images/image-avatar.png"
          className={styles.avatarImage}
        ></img>
      </div>
    </div>
  );
}
