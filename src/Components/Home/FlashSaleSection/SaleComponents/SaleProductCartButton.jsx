import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useRequireAuth } from "../../../../Stores/useRequireAuth";
import {
  UseAddToCart,
  UseDeleteFromCart,
  useGetCart,
} from "../../../../Hooks/UseCart";

export default function SaleProductCartButton({ id }) {
  const requireAuth = useRequireAuth();
  const { mutate: addToCart } = UseAddToCart();
  const { mutate: deleteFromCart } = UseDeleteFromCart();
  const { data } = useGetCart();

  const cartItem = data?.cart?.find((item) => item.bookDetails.bookId === id);
  const isInCart = !!cartItem;

  const handleCart = () => {
    requireAuth(() =>
      isInCart ? deleteFromCart(cartItem.cartId) : addToCart(id),
    );
  };

  return (
    <div className="pt-6 flex justify-end">
      <button
        onClick={handleCart}
        className="w-12 h-12 bg-(--btn-color) rounded-(--btn-radius) flex justify-center items-center border border-(--btn-color) hover:bg-transparent text-2xl text-(--secondary-text-color) hover:text-(--btn-color) hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75 cursor-pointer"
      >
        {isInCart ? <MdOutlineRemoveShoppingCart /> : <IoCartOutline />}
      </button>
    </div>
  );
}
