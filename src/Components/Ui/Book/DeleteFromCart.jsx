import { VscTrash } from "react-icons/vsc";
import { UseDeleteFromCart } from "../../../Hooks/UseCart";

export default function DeleteFromCart({ cartId }) {
  const { mutate: deleteFromCart } = UseDeleteFromCart();

  return (
    <button
      onClick={() => deleteFromCart(cartId)}
      className="relative overflow-hidden group p-2 bg-(--btn-color-light) border border-(--btn-color) rounded-(--btn-radius) text-(--btn-color) cursor-pointer transition-colors duration-500"
    >
      <span className="absolute inset-0 bg-(--btn-color) translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <VscTrash className="relative z-10 text-2xl group-hover:text-white transition-colors duration-500" />
    </button>
  );
}
