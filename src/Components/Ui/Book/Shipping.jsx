import { FaTruckFast } from "react-icons/fa6";

export default function Shipping() {
  return (
    <div className="min-w-fit w-fit flex items-center gap-2 py-1 md:py-2 px-3 border border-[#22222233] rounded-(--btn-radius) text-[12px] sm:text-sm text-[#22222280]">
      <FaTruckFast />
      <p>Free Shipping</p>
    </div>
  );
}
