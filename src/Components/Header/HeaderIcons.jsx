import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import { useGetWishList } from "../../Hooks/UseWishList";
import { useGetCart } from "../../Hooks/UseCart";

export default function HeaderIcons() {
  const location = useLocation();
  const { data: cart } = useGetCart();
  const { data: wishlist } = useGetWishList();

  const cartCount = cart?.cart?.length || 0;
  const wishlistCount = wishlist?.length || 0;

  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <Link to="/wishlist" className="relative">
        <FaRegHeart
          className={`${location.pathname === "/wishlist" ? "text-(--first-text-yellow-color)" : "hover:text-(--first-text-yellow-color)"} text-xl lg:text-2xl transition-colors duration-300`}
        />
        {wishlistCount >= 0 && (
          <span className="absolute -top-1 -right-2 w-4 h-4 lg:w-4.5 lg:h-4.5 bg-(--btn-color) border-2 border-white rounded-full text-white text-[8px] flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </Link>
      <Link to="/cart" className="relative">
        <AiOutlineShoppingCart
          className={`${location.pathname === "/cart" ? "text-(--first-text-yellow-color)" : "hover:text-(--first-text-yellow-color)"} text-2xl lg:text-3xl transition-colors duration-300 `}
        />
        {cartCount >= 0 && (
          <span className="absolute -top-1 -right-2 w-4 h-4 lg:w-4.5 lg:h-4.5 bg-(--btn-color) border-2 border-white rounded-full text-white text-[8px] flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
      <ProfileSection />
    </div>
  );
}
