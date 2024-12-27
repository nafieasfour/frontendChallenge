console.log("Test Click");
console.log(cartItems);

//index.js starts
import HrLine from "@/components/HrLine";
import ImageModal from "@/components/ImageModal";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HrLine />
      <ProductCard />
    </div>
  );
}
//index.js ends

onclick="toggleMenu()"