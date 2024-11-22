import React from "react";
import HrLine from "@/components/HrLine";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <div>
        <NavBar />
        <HrLine />
        <ProductCard />
        <Cart />
      </div>
    </CartProvider>
  );
}
