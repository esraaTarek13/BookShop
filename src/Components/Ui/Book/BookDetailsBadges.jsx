import { LuBadgeCheck } from "react-icons/lu";
import Shipping from "./Shipping.jsx";

export default function BookDetailsBadges({ stock, discount }) {
  return (
    <div className="flex flex-col gap-3  md:items-end">
      <div className="flex items-center gap-3">
        <div className="min-w-fit flex items-center gap-2 py-1 md:py-2 px-3 border border-[#22222233] rounded-(--btn-radius) text-sm text-[#25D994]">
          <LuBadgeCheck />
          <p>{stock > 0 ? "In Stock" : "Out of Stock"}</p>
        </div>
        <Shipping />
      </div>

      <p className="min-w-fit flex items-center gap-2 py-1 md:py-2 px-3 border border-[#22222233] rounded-(--btn-radius) text-sm text-[#EAA451]">
        Discount code: {discount}
      </p>
    </div>
  );
}
