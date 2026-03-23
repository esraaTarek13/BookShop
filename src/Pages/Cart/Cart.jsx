import CartPage from "../../Components/Cart/CartPage";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function Cart() {
  return (
    <>
      <HeroSection height="h-[20vh]" />
      <div className="bg-(--main-color) pt-10 md:pt-15">
        <div className="Custom-container">
          <CartPage />
        </div>
      </div>
    </>
  );
}
