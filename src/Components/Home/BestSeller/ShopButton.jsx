import { Link } from "react-router-dom";

export default function ShopButton() {
  return (
    <Link to="/books"
      className="bg-(--btn-color) py-2 px-9 md:py-3 md:px-12 rounded-(--btn-radius) font-(--text-font-weight) text-[16px] md:text-[18px] cursor-pointer border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75"
    >
      Shop now
    </Link>
  );
}
