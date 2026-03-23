import { HiOutlineMinusCircle } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";
import { UseUpdateCartQty } from "../../../Hooks/UseCart";

export default function BookQuantity({ qty, cartId }) {
  const { mutate: updateQty } = UseUpdateCartQty();
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <HiOutlineMinusCircle
        onClick={() => qty > 1 && updateQty({ id: cartId, qty: qty - 1 })}
        className={`${qty === 1 ? "text-[#D9176C80] cursor-default" : "text-(--btn-color)"} text-lg md:text-xl transition-opacity duration-200 cursor-pointer`}
      />
      <p>{qty}</p>
      <FiPlusCircle
        onClick={() => updateQty({ id: cartId, qty: qty + 1 })}
        className="text-(--btn-color) text-lg md:text-xl cursor-pointer"
      />
    </div>
  );
}
