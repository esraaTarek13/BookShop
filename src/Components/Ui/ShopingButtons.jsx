import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useRequireAuth } from "../../Stores/useRequireAuth";
import {
  UseAddToWishList,
  UseDeleteFromWishList,
  useGetWishList,
} from "../../Hooks/UseWishList";
import {
  UseAddToCart,
  UseDeleteFromCart,
  useGetCart,
} from "../../Hooks/UseCart";

export default function ShoppingButtons({ id }) {
  const requireAuth = useRequireAuth();
  const { mutate: addToWishList } = UseAddToWishList();
  const { mutate: addToCart } = UseAddToCart();
  const { mutate: deleteFromWishList } = UseDeleteFromWishList();
  const { mutate: deleteFromCart } = UseDeleteFromCart();
  const { data: wishlist } = useGetWishList();
  const { data } = useGetCart();

  const cartItem = data?.cart?.find((item) => item.bookDetails.bookId === id);
  const wishlistItem = wishlist?.find((item) => item.book.bookId === id);
  const isInCart = !!cartItem;
  const isInWishList = !!wishlistItem;

  const handleCart = () => {
    requireAuth(() =>
      isInCart ? deleteFromCart(cartItem.cartId) : addToCart(id),
    );
  };

  const handleWishList = () => {
    requireAuth(() =>
      isInWishList
        ? deleteFromWishList(wishlistItem.book.bookId)
        : addToWishList(id),
    );
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleCart}
        className="w-full min-w-fit p-2 md:p-3.25 flex items-center justify-center gap-2.5 bg-(--btn-color) rounded-(--btn-radius) text-sm md:text-base text-(--secondary-text-color) font-(--text-font-weight) border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75 cursor-pointer"
      >
        {isInCart ? "Remove From Cart" : "Add To Cart"}
        <IoCartOutline className="text-xl md:text-2xl" />
      </button>
      <button
        onClick={handleWishList}
        className="w-fit p-2 md:p-3.25 text-lg bg-(--secondary-text-color) text-(--btn-color) border border-(--btn-color) rounded-(--btn-radius) outline-0 hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75 cursor-pointer"
      >
        {isInWishList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}
