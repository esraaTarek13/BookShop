import HeroSection from "../../Components/HeroSection/HeroSection";
import WishListPage from "../../Components/WishList/WishListPage";

export default function WishList() {
  return (
    <>
      <HeroSection height="h-[20vh]" />
      <div className="bg-(--main-color) pt-10 md:pt-15">
        <div className="Custom-container">
          <WishListPage />
        </div>
      </div>
    </>
  );
}
