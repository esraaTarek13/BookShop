import { UseMoveAllToCart } from "../../Hooks/UseWishList";

export default function WishListBtn() {
  const { mutate: moveAllToCart } = UseMoveAllToCart();

  return (
    <div className="pb-20">
      <button
        onClick={() => moveAllToCart()}
        className="relative bg-(--btn-color-light) overflow-hidden group py-2 px-5 md:py-3.5 md:px-6 border border-(--btn-color) rounded-(--btn-radius) text-(--btn-color) font-(--text-font-weight) cursor-pointer transition-colors duration-500"
      >
        <span className="absolute inset-0 bg-(--btn-color) translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
          Move All to cart
        </span>
      </button>
    </div>
  );
}
