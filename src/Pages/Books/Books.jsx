import HeroSection from "../../Components/HeroSection/HeroSection";
import ShopLayout from "../../Components/Shop/ShopLayout";

export default function Books() {
  return (
    <>
      <HeroSection height="h-[20vh]" />

      <div className="bg-(--main-color)">
        <ShopLayout />
      </div>
    </>
  );
}
