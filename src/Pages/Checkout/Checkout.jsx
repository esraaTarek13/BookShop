import CheckoutPage from "../../Components/Checkout/CheckoutPage";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function CheckOut() {
  return (
    <>
      <HeroSection height="h-[20vh]" />
      <div className="bg-(--main-color) py-10 md:py-15">
        <div className="Custom-container">
          <CheckoutPage />
        </div>
      </div>
    </>
  )
}
