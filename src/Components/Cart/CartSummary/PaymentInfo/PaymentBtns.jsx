import { Link } from "react-router-dom";

export default function PaymentBtns() {
  return (
    <div className="flex flex-col gap-3">
      <Link to="/checkout" className="bg-(--btn-color) border border-(--btn-color) rounded-(--btn-radius) py-2 md:py-3.25 text-center font-(--text-font-weight) text-white text-sm md:text-base cursor-pointer hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_8px_1px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75">
        Check out
      </Link>
      <Link to="/books" className="border border-(--btn-color) rounded-(--btn-radius) py-2 md:py-3.25 text-center font-(--text-font-weight) text-(--btn-color) text-sm md:text-base cursor-pointer hover:shadow-[0_0_8px_1px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75">
        Keep Shopping
      </Link>
    </div>
  )
}